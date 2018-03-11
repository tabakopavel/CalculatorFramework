package com.thecalculatorsite.framework.core.driver;


import com.thecalculatorsite.framework.util.Propertiess;
import org.apache.commons.io.FileUtils;
import org.joda.time.LocalDateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.internal.Coordinates;
import org.openqa.selenium.interactions.internal.Locatable;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

public class Driver {

    private static final String FIREFOX = "firefox";
    private static final String CHROME = "chrome";
    private static final String EDGE = "edge";
    private static final String IE = "ie";

    private static final ThreadLocal<WebDriver> driver = new InheritableThreadLocal<>();
    private static Integer defImpTimeout;
    private static Integer defJsTimeout;
    private static Integer defAjaxTimeout;
    private static Integer defFlTimeout;
    private static Integer defPollingEvery;
    private static String browserFromCmd;
    private static String currentDriver;

    private Driver() {

    }

    public static WebDriver getDriver() {
        if (driver.get() == null) {
            init();
        }
        return driver.get();
    }

    public static void setBrowser(String browser) {
        browserFromCmd = browser;
    }

    private static void webDriverInstCreation(String browser) {
        if (browser.equalsIgnoreCase(FIREFOX)) {
            FirefoxProfile profile = new FirefoxProfile();
            DesiredCapabilities dc = DesiredCapabilities.firefox();
            profile.setPreference("browser.startup.homepage", "about:blank");
            dc.setCapability(FirefoxDriver.PROFILE, profile);
            driver.set(new FirefoxDriver(dc));
        } else if (browser.equalsIgnoreCase(CHROME)) {
            driver.set(new ChromeDriver());
        } else if (browser.equalsIgnoreCase(EDGE)) {
            driver.set(new EdgeDriver());
        } else if (browser.equalsIgnoreCase(IE)) {
            driver.set(new InternetExplorerDriver());
        } else {
            throw new RuntimeException("Browser is not supported yet");
        }
    }

    public static void init() {
        try {
            Propertiess.init();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        if (browserFromCmd == null) {
            webDriverInstCreation(System.getProperty("browser"));
            currentDriver = System.getProperty("browser");
        } else {
            webDriverInstCreation(browserFromCmd);
            currentDriver = browserFromCmd;
        }
        Driver.getDriver().manage().window().maximize();
        defImpTimeout = Integer.parseInt(System.getProperty("defImpWait"));
        defJsTimeout = Integer.parseInt(System.getProperty("defJsTimeout"));
        defFlTimeout = Integer.parseInt(System.getProperty("defFlTimeout"));
        defPollingEvery = Integer.parseInt(System.getProperty("pollingEvery"));
        defAjaxTimeout = Integer.parseInt(System.getProperty("defAjaxTimeout"));
        getDriver().manage().timeouts().implicitlyWait(defImpTimeout, TimeUnit.SECONDS);
    }

    public static boolean checkElementVisibility(WebElement webElement) {
        FluentWait wait = new FluentWait(getDriver())
                .withTimeout(defFlTimeout, TimeUnit.SECONDS)
                .pollingEvery(defPollingEvery, TimeUnit.SECONDS)
                .ignoring(NoSuchElementException.class);
        try {
            wait.until(ExpectedConditions.visibilityOfElementLocated(getAbsoluteXpath(webElement)));
            return true;
        } catch (NoSuchElementException e) {
            return false;
        }
    }

    public static void performJsClick(WebElement webElement) {
        ((JavascriptExecutor) Driver.getDriver()).executeScript("arguments[0].click()", webElement);
    }

    public static void waitForJSToLoad(int timeout, int pollingEvery) {
        FluentWait wait = new FluentWait(getDriver()).withTimeout(timeout, TimeUnit.SECONDS)
                .pollingEvery(pollingEvery, TimeUnit.SECONDS)
                .ignoring(Exception.class);
        ExpectedCondition<Boolean> jsLoad = driver -> ((JavascriptExecutor) driver)
                .executeScript("return document.readyState").toString()
                .equals("complete");
        wait.until(jsLoad);
    }

    public static void waitForAjaxToLoad(int timeout, int pollingEvery) {
        FluentWait wait = new FluentWait(getDriver()).withTimeout(timeout, TimeUnit.SECONDS)
                .pollingEvery(pollingEvery, TimeUnit.SECONDS)
                .ignoring(Exception.class);
        ExpectedCondition<Boolean> aJaxLoad = driver -> ((JavascriptExecutor) getDriver())
                .executeScript("return((window.jQuery != null) && (jQuery.active == 0))").toString().equals("true");
        wait.until(aJaxLoad);
    }

    public static void waitForJQueryToLoad(int timeout, int pollingEvery) {
        FluentWait wait = new FluentWait(getDriver()).withTimeout(timeout, TimeUnit.SECONDS)
                .pollingEvery(pollingEvery, TimeUnit.SECONDS)
                .ignoring(Exception.class);
        ExpectedCondition<Boolean> jQueryLoad = driver -> ((JavascriptExecutor) driver)
                .executeScript("return window.jQuery != undefined && jQuery.active === 0").toString().equals("true");
        wait.until(jQueryLoad);
    }

    public static void waitForJSToLoad() {
        waitForJSToLoad(defJsTimeout, defPollingEvery);
    }

    public static void waitForAjaxToLoad() {
        waitForAjaxToLoad(defAjaxTimeout, defPollingEvery);
    }

    public static void waitForJQueryToLoad() {
        waitForJQueryToLoad(defFlTimeout, defPollingEvery);
    }

    public static String executeJsAndGetStringResult(String script, WebElement argument) {
        return (String) ((JavascriptExecutor) getDriver()).executeScript(script, argument);
    }

    private static By getAbsoluteXpath(WebElement webElement) {
        String xpath = (String) ((JavascriptExecutor) getDriver()).executeScript(
                "function absoluteXPath(element) {" +
                        "var comp, comps = [];" +
                        "var parent = null;" +
                        "var xpath = '';" +
                        "var getPos = function(element) {" +
                        "var position = 1, curNode;" +
                        "if (element.nodeType == Node.ATTRIBUTE_NODE) {" +
                        "return null;" +
                        "}" +
                        "for (curNode = element.previousSibling; curNode; curNode = curNode.previousSibling) {" +
                        "if (curNode.nodeName == element.nodeName) {" +
                        "++position;" +
                        "}" +
                        "}" +
                        "return position;" +
                        "};" +

                        "if (element instanceof Document) {" +
                        "return '/';" +
                        "}" +

                        "for (; element && !(element instanceof Document); element = element.nodeType == Node.ATTRIBUTE_NODE ? element.ownerElement : element.parentNode){" +
                        "comp = comps[comps.length] = {};" +
                        "switch (element.nodeType) {" +
                        "case Node.TEXT_NODE:" +
                        "comp.name = 'text()';" +
                        "break;" +
                        "case Node.ATTRIBUTE_NODE:" +
                        "comp.name = '@' + element.nodeName;" +
                        "break;" +
                        "case Node.PROCESSING_INSTRUCTION_NODE:" +
                        "comp.name = 'processing-instruction()';" +
                        "break;" +
                        "case Node.COMMENT_NODE:" +
                        "comp.name = 'comment()';" +
                        "break;" +
                        "case Node.ELEMENT_NODE:" +
                        "comp.name = element.nodeName;" +
                        "break;" +
                        "}" +
                        "comp.position = getPos(element);" +
                        "}" +

                        "for (var i = comps.length - 1; i >= 0; i--) {" +
                        "comp = comps[i];" +
                        "xpath += '/' + comp.name.toLowerCase();" +
                        "if (comp.position !== null) {" +
                        "xpath += '[' + comp.position + ']';" +
                        "}" +
                        "}" +

                        "return xpath;" +

                        "} return absoluteXPath(arguments[0]);", webElement);
        return By.xpath(xpath);
    }

    public static void clean() {
        if (getDriver() != null) {
            getDriver().close();
            getDriver().quit();
        }
    }

    public static void takeScreenShot() {
        File screenshot = ((TakesScreenshot) getDriver()).getScreenshotAs(OutputType.FILE);
        try {
            LocalDateTime time = LocalDateTime.now();
            DateTimeFormatter formatter = DateTimeFormat.forPattern(" dd MMMM yyyy HH-mm-ss.SSS");
            String dateTime = formatter.print(time);
            String screenshotName = System.getProperty("screenshotTemp") + dateTime;
            File copy = new File(screenshotName + ".png");
            FileUtils.copyFile(screenshot, copy);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static String getCurrentDriver() {
        return currentDriver;
    }

    public static void waitForElementClickable(WebElement webElement) {
        FluentWait wait = new FluentWait(getDriver())
                .withTimeout(defFlTimeout, TimeUnit.SECONDS)
                .pollingEvery(defPollingEvery, TimeUnit.SECONDS)
                .ignoring(NoSuchElementException.class);
        wait.until(ExpectedConditions.elementToBeClickable(webElement));
    }

    public static void waitForElementPresent(WebElement webElement) {
        FluentWait wait = new FluentWait(getDriver())
                .withTimeout(defFlTimeout, TimeUnit.SECONDS)
                .pollingEvery(defPollingEvery, TimeUnit.SECONDS)
                .ignoring(NoSuchElementException.class);
        wait.until(ExpectedConditions.presenceOfElementLocated(getAbsoluteXpath(webElement)));

    }

    public static boolean isElementPresent(WebElement webElement) {
        getDriver().manage().timeouts().implicitlyWait(0, TimeUnit.SECONDS);
        List<WebElement> elements = getDriver().findElements(Driver.getAbsoluteXpath(webElement));
        getDriver().manage().timeouts().implicitlyWait(defImpTimeout, TimeUnit.SECONDS);
        return elements.size() > 0 && elements.get(0).isDisplayed();
    }

    public static boolean isElementVisible(By locator) {
        getDriver().manage().timeouts().implicitlyWait(0, TimeUnit.SECONDS);
        List<WebElement> elements = getDriver().findElements(locator);
        getDriver().manage().timeouts().implicitlyWait(defImpTimeout, TimeUnit.SECONDS);
        return elements.size() > 0 && elements.get(0).isDisplayed();
    }

    public static void pointAt(WebElement webElement) {
        Coordinates cor = ((Locatable) webElement).getCoordinates();
        cor.onPage();
        cor.inViewPort();
    }

}

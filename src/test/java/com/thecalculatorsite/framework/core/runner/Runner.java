package com.thecalculatorsite.framework.core.runner;


import com.thecalculatorsite.framework.core.config.Settings;
import com.thecalculatorsite.framework.core.config.TestNgConfig;
import com.thecalculatorsite.framework.core.driver.Driver;
import org.kohsuke.args4j.CmdLineException;
import org.kohsuke.args4j.CmdLineParser;
import org.testng.TestNG;
import org.testng.xml.Parser;
import org.testng.xml.XmlSuite;
import org.testng.xml.XmlTest;

import java.util.List;

public class Runner {

    private final TestNG testNG = new TestNG();

    public static void main(String[] args) {
        try {
            new Runner(args).run();
        } catch (Exception exc) {

        }
    }

    private Runner(String[] args) {
        Settings settings = new Settings();
        CmdLineParser parser = new CmdLineParser(settings);
        try {
            parser.parseArgument(args);
            TestNgConfig.addTestngConfig(settings.pathToTestng);
            Driver.setBrowser(settings.driver);
        } catch (CmdLineException e) {
            parser.printUsage(System.out);
        }
    }

    private void run() {
        try {
            List includedGroups = TestNgConfig.getIncludedGroups();
            List excludedGroups = TestNgConfig.getExcludedGroups();
            for (String suite : TestNgConfig.getTestngConfigs()) {
                for (XmlSuite xmlSuite : new Parser(suite).parseToList()) {
                    for (XmlTest test : xmlSuite.getTests()) {
//                        testng.getIncludedGroups().addAll(includedGroups);
//                        testng.getExcludedGroups().addAll(excludedGroups);
                    }
                    this.testNG.setCommandLineSuite(xmlSuite);
                }
            }
            this.testNG.run();
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            Driver.clean();
        }
    }
}

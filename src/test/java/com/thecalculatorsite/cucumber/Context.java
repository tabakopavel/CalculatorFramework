package com.thecalculatorsite.cucumber;


import com.thecalculatorsite.framework.core.driver.Driver;
import com.thecalculatorsite.manager.PageObjectManager;


public class Context {

    private PageObjectManager pageObjectManager;

    public Context() {
        pageObjectManager = new PageObjectManager(Driver.getDriver());
    }

    public PageObjectManager getPageObjectManager() {
        return pageObjectManager;
    }
}

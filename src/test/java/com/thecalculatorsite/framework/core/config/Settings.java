package com.thecalculatorsite.framework.core.config;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.kohsuke.args4j.Option;

public class Settings {
    @Option(name = "--testng", usage = "Set path to allTest.xml file", required = true)
    public String pathToTestng;

    @Option(name = "--driver", usage = "Browser type", required = true)
    public String driver;

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this, ToStringStyle.SIMPLE_STYLE);
    }

}

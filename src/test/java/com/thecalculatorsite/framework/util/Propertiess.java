package com.thecalculatorsite.framework.util;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Enumeration;
import java.util.Properties;


public class Propertiess {

    private final static String PROPERTIES_FILE = "config.properties";

    public static void init() throws FileNotFoundException {
        InputStream inputStream = Propertiess.class.getClassLoader().getResourceAsStream(PROPERTIES_FILE);
        if (inputStream == null) {
            throw new FileNotFoundException("property file '" + PROPERTIES_FILE + "' not found in the classpath");
        }
        try {
            Properties properties = new Properties();
            properties.load(inputStream);
            Enumeration<String> enumeration = (Enumeration<String>) properties.propertyNames();
            while (enumeration.hasMoreElements()) {
                String key = enumeration.nextElement();
                System.setProperty(key, properties.getProperty(key));
            }
        } catch (IOException e) {
            throw new RuntimeException("Configuration.properties not found at resources folder");
        }
    }


}

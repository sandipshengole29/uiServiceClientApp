package com.uiServiceClientApp.main;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.ComponentScan;

/**
 * 
 */


/**
 * @author Sandip.Shengole
 *
 */
@SpringBootApplication
@ComponentScan(basePackages="com.uiServiceClientApp")
@ConfigurationProperties
@EnableEurekaClient

public class uiServiceClient {
	private static final Logger LOGGER = LoggerFactory.getLogger(uiServiceClient.class);
	
	public uiServiceClient() {
		LOGGER.info("Inside Default Constructor");
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		SpringApplication.run(uiServiceClient.class, args);
	}

}

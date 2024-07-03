package com.example.notafiscal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class NotafiscalApplication {

	public static void main(String[] args) {
		SpringApplication.run(NotafiscalApplication.class, args);
	}
	
	@Bean
	public WebMvcConfigurer corsConfig() {
		return new WebMvcConfigurer() {
			
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
				.allowedOrigins("http://localhost:4200")
				.allowedMethods("GET", "PUT", "OPTIONS", "POST", "DELETE")
				.maxAge(900)
				.allowedHeaders("Origin", "X-Reques", "Content-Type", "Accept", "Authorization");
			}
		};	
	}
}

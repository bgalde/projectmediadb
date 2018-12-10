package edu.umuc.cmsc495.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	
	@GetMapping("/")
	String home() {
		return "Welcome to Projectmediadb!.";
	}

}

package com.mcview.mcView.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/")
@RestController
public class ViewController {
    @GetMapping("/documentation")
    public String documentation() {
        return "Welcome to the documentation page!";
    }
}

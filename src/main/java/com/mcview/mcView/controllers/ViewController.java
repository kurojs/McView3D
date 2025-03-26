package com.mcview.mcView.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    @GetMapping("/documentation")
    public String documentation() {
        return "documentation.html";
    }
}

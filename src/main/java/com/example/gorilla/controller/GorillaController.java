package com.example.gorilla.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GorillaController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/tinder")
    public String tinder() {
        return "tinder";
    }

    @GetMapping("/disney")
    public String disney() {
        return "disney";
    }

    @GetMapping("/netflix")
    public String netflix() {
        return "netflix";
    }

    @GetMapping("/about")
    public String about() {
        return "about";
    }

    @GetMapping("/faq")
    public String faq() {
        return "faq";
    }

    @GetMapping("/contato")
    public String contato() {
        return "contato";
    }
}

package com.gympulse.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping({"/", "/dashboard"})
    public String dashboard() {
        return "dashboard";
    }

    @GetMapping("/ejercicios")
    public String ejercicios() {
        return "ejercicios";
    }

    @GetMapping("/investigacion")
    public String investigacion() {
        return "investigacion";
    }
}

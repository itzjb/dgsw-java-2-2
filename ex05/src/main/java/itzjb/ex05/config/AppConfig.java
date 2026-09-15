package itzjb.ex05.config;

import itzjb.ex05.computer.Computer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public Computer computer() {
        return  new Computer();
    }
}

package itzjb.ex05;

import itzjb.ex05.computer.Computer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.stream.Stream;

@SpringBootApplication
public class Ex05Application {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(Ex05Application.class, args);
//        System.out.println(context.getBeanDefinitionCount());
//        String[] names = context.getBeanDefinitionNames();
//        Stream.of(names).forEach(System.out::println);

//        Computer computer1 = context.getBean(Computer.class);
//        Computer computer2 = context.getBean(Computer.class);
//        Computer computer3 = new Computer();
//
//        System.out.println(computer1 == computer2);
//        System.out.println(computer1 == computer3);
    }

}

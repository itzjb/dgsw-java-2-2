package itzjb.ex05.hello;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import itzjb.ex05.computer.Computer;
import itzjb.ex05.computer.MacBook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class HelloController {

    @Autowired
    private Computer computer;

    private final MacBook macBook;

    public HelloController(MacBook macBook) {
        this.macBook = macBook;
    }

    @GetMapping("macbook")
    public String macbook() {
        System.out.println("macbook: " + macBook);
        return "macbook";
    }


    @GetMapping("computer")
    public String computer() {
        computer.turnOn();
        return "computer";
    }


    @GetMapping("api/hello")
    @Operation(summary = "이름을 보내면 인사", description = "이름을 보내면 인사말을 반환합니다. 이름을 보내지 않으면 익명으로 인사합니다.")
    public Map<String, Object> hello(
            @Parameter(description = "이름", example = "홍길동")
            @RequestParam(defaultValue = "익명") String name
    ) {
        System.out.println("hello " + name);
        return Map.of("message", "Hello World!");
    }

    @GetMapping("api/product")
    @Operation(summary = "상품 조회", description = "상품 ID를 보내면 상품 정보를 반환합니다.")
    public Map<String, Object> product(
            @Parameter(description = "상품 개수", example = "1")
            @RequestParam(defaultValue = "1") int count) {
        System.out.println("product " + count);
        return Map.of("count", count);
    }

    @PostMapping("api/data")
    public Map<String, Object> data(@RequestBody Map<String, Object> body) {
        System.out.println("data " + body);
        return Map.of("message", "api/data");
    }
}

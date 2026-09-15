package itzjb.ex04.lambda;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.stream.IntStream;
import java.util.stream.Stream;

@RestController
public class LambdaController {

    @GetMapping("/lambda")
    public String lambda() {
        return "lambda";
    }

    @GetMapping("/calculate")
    public Map<String, Integer> calculate(@RequestParam int a, @RequestParam int b) {
        Calculator add = (x1, y1) -> x1 + y1;
        Calculator sub = (x2, y2) -> x2 - y2;
        return Map.of("a", a, "b", b, "a + b", add.calc(a, b), "a - b", sub.calc(a, b));
    }

    interface Calculator {
        int calc(int a, int b);
    }

    @GetMapping("/streamMake")
    public String streamMake() {
        String[] strings = new String[]{"aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj"};
        Stream<String> stream = Stream.of(strings);
        long count = stream.filter(s -> s.length() == 2)
                .sorted()
                .peek(System.out::println)
                .count();
        return "streammake count = " + count;
    }

    @GetMapping("/streamMap")
    public String streamMap() {
        String[] strings = new String[]{"aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj"};
        Stream<String> stream = Stream.of(strings);
        List<Integer> count = stream.map((str) -> str.length())
                .toList();
        System.out.println(count);
        return "streamMap count = " + count;
    }

    @GetMapping("/even")
    public Map<String, Object> Even(@RequestParam int from, @RequestParam int to) {
        IntStream intStream = IntStream.range(from, to).filter(i -> i % 2 == 0);
        List<Integer> list = intStream.boxed().toList();
        long count = list.size();

        return Map.of("count", count, "list", list);
    }
}



package optional;

import java.util.Optional;

public class Ex02 {
    static void main() {
        Optional<String> optional = Optional.of("Hello");
        System.out.println(optional.get());
    }
}

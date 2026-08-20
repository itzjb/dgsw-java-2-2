package optional;

import java.util.Optional;

public class Ex12 {
    static void main() {
        Optional<String> java = Optional.of("java");
        System.out.println(java.orElse("값이 없다").length());
    }
}

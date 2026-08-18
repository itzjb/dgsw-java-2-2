package optional;

import java.util.Optional;

public class Ex08 {
    static void main() {
        Optional<String> opt = Optional.ofNullable("Hello");
        opt.ifPresent(v -> System.out.println("값 있음"));
    }
}

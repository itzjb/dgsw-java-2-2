package optional;

import java.util.Optional;

public class Ex05 {
    static void main() {
        Optional<String> optional = Optional.ofNullable(null);
        optional.ifPresent(s -> System.out.println(s));
    }

}

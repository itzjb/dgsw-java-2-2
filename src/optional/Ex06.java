package optional;

import java.util.Optional;

public class Ex06 {
    static void main() {
        Optional<String> drink = Optional.ofNullable(null);
        System.out.println(drink.orElse("물"));
    }
}

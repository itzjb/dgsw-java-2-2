package optional;

import java.util.Optional;

public class Ex09 {
    static void main() {
        Optional.of("Java").ifPresent(s -> System.out.println(s.length()));
    }
}

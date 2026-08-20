package optional;

import java.util.Optional;

public class Ex03 {
    static void main() {
        Optional<String> optional = Optional.empty();
        if (optional.isPresent()) {
            System.out.println(optional.get());
        } else {
            System.out.println("빈 값");
        }
    }
}

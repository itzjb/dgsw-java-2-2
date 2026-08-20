package optional;

import java.util.Optional;

public class Ex04 {
    static void main() {
        Optional<String> optional = Optional.ofNullable(null);
        System.out.println(optional.orElse("기본값"));
    }
}

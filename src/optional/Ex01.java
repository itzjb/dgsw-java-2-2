package optional;

import java.util.Optional;

public class Ex01 {
    static void main() {

//        How to make Optional in 3 ways
        // 1. .of() : if we have value
        Optional<String> opt1 = Optional.of("Hello");
        // 2. .ofNullable : case if we dont have value
        Optional<String> opt3 = Optional.ofNullable(null);
        // 3. .empty : empty value
        Optional<String> opt2 = Optional.empty();


//        Optional get() / orElse() / ifPresent
        // get()
        System.out.println(opt1.get());
//        System.out.println(opt2.get());
//        System.out.println(opt3.get());

        // orElse()
        System.out.println(opt1.orElse("기본값"));
        System.out.println(opt2.orElse("기본값"));
        System.out.println(opt3.orElse("기본값"));

        // ifPresent
        opt1.ifPresent(s -> System.out.println(s));
        opt2.ifPresent(s -> System.out.println(s));
        opt3.ifPresent(s -> System.out.println(s));

        // isPresent
        if (opt1.isPresent()) { System.out.println(opt1.get()); }
            else { System.out.println("기본값"); }
        if (opt2.isPresent()) { System.out.println(opt2.get()); }
            else { System.out.println("기본값"); }
        if (opt3.isPresent()) { System.out.println(opt3.get()); }
            else { System.out.println("기본값"); }

    }
}

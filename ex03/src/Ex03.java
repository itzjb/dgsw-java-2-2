import java.util.function.Function;

public class Ex03 {
    static void main() {
        Function<String, Integer> f = x -> Integer.parseInt(x, 16);
        Function<Integer, String> f2 = x -> Integer.toString(x);

        Function<String, String> andThenf = f.andThen(f2);

        System.out.println(andThenf.apply("FF"));
    }
}

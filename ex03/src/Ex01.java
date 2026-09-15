import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.function.*;

public class Ex01 {
    static void main() {
        Supplier<Integer> s = () -> (int)(Math.random() *  100);
        System.out.println(s.get());
        List<Integer> list = new ArrayList<>();
        makeRandomList(s, list);
        System.out.println(list);

        // 소비 반환값이 없고 매개변수를 받아 소비하는 역할
        Consumer<Integer> c = x -> System.out.println(x);
        c.accept(100);
        printList(c, list);

        Function<Integer, String> f = x -> "x*2 = " + (x * 2) + " 입니다.";
        System.out.println(f.apply(10));

        Predicate<String> pr = s1 -> s1.equals("qwer");
        System.out.println(pr.test("qwer"));
        System.out.println(pr.test("qwer2"));

        BiConsumer<String, String> bic = (x, y) -> {
            System.out.println("first: " + x);
            System.out.println("second: " + y);
        };
        bic.accept("Hello", "World");

    }

    private static void printList(Consumer<Integer> c, List<Integer> list) {
        for (int i = 0; i < 10; i++) {
            list.forEach(c);
        }
    }

    public static <T> void makeRandomList(Supplier<T> s, List<Integer> list) {
//        list.add((Integer) s.get());
        for (int i = 0; i < 10; i++) {
            list.add((Integer) s.get());
        }
    }
}

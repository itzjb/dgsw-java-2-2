import java.util.Arrays;
import java.util.List;
import java.util.function.Function;

public class Ex04 {
    static void main() {

        Function<String, Integer> f1 = i -> Integer.parseInt(i);
        Function<String, Integer> f2 = Integer::parseInt;

        List<String> al = Arrays.asList("1", "2", "3", "4", "5", "6", "7", "8", "9");
        al.forEach(System.out::println);

        System.out.println("---");

        // interface Calculate @FunctionalInterface 를 만들어서
        // 추상 메서드 operate를 추가하고
        // 덧셈하는 람다식
        // 뺄샘하는 람다식을 작성헤서 두 수를 보내 더하기와 빼기를 구하시오

        Calculate add = (a, b) -> a + b;
        Calculate subtract = (a, b) -> a - b;
        System.out.println(add.operate(1, 2));
        System.out.println(subtract.operate(2, 1));
    }

    @FunctionalInterface
    interface Calculate {
        int operate(int a, int b);
    }
}

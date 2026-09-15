import java.util.Arrays;
import java.util.List;

public class Ex02 {
    static void main() {
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
        list.forEach(num -> System.out.println(num));
        list.replaceAll(num -> num*num);
        System.out.println("---");
        list.forEach(num -> System.out.println(num));
    }
}

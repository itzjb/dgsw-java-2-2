import java.util.*;

public class Ex03 {
    static void main() {
        List<String> list = Arrays.asList("abc", "abcd", "aa", "bb");
//        Collections.sort(list, new Comparator<String>() {
//            @Override
//            public int compare(String o1, String o2) {
//                return o2.compareTo(o1);
//            }
//        });
        Collections.sort(list, (o1, o2) -> o2.length() - o1.length());
        System.out.println(list);
    }
}

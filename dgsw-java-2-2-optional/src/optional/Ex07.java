package optional;

import java.util.Optional;

public class Ex07 {
    public static Optional<Integer> getExamScore(String subject) {
        if (subject.equals("수학")) {
            return Optional.of(100);
        }
        return Optional.ofNullable(null);
    }
    static void main() {
        System.out.println(getExamScore("수학").orElse(0));
    }
}

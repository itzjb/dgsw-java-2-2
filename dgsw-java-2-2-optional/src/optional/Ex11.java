package optional;

import java.util.Optional;

public class Ex11 {
    public static Optional<String> getStudentName() {
        return Optional.ofNullable(null);
    }
    static void main() {
        Optional<Optional<String>> student = Optional.ofNullable(getStudentName());
        if (student.isPresent()) {
            System.out.println(student.get().orElse("학생 이름 없음"));
        }
    }
}

package optional;

import java.util.Optional;

public class Ex10 {
    public static Optional<String> getUser() {
        return Optional.ofNullable(null);
    }
    static void main() {
        System.out.println(getUser().isPresent() ? "로그언 성공" : "로그인 실패");
    }
}

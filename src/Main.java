import java.util.Optional;

class main {

    public static Optional<String> getName() {
        return Optional.of("홍길동");
    }

    static void main() {
        System.out.println("안녕하세요");
        String name = null;

        try{
            System.out.println("name.length(): " + name.length());
        } catch(Exception e){
//            e.printStackTrace();
        }

        Optional<String> optional = getName();
        optional.ifPresent(s -> System.out.println(s));
    }
}
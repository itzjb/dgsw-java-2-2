interface BB{
    String doA(int b);
}

class AAAA{}

public class Ex04 {
    public static void method1(BB bb, AAAA aaaa){
    }

    static void main() {
        method1(
                (num) -> String.valueOf(num),
                new AAAA()
        );
    }
}

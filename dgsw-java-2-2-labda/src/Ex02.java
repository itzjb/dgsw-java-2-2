public class Ex02 {
    static void main() {
        AA a1 = () -> 10;
        AA a2 = () -> 20;

        System.out.println("a1 = " + a1.doA());
        System.out.println("a2 = " + a2.doA());
    }
}


interface AA {
    int doA();
}
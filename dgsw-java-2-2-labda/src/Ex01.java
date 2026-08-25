interface DoA{
//    void doSomething();
    void doA();
    default void doB(){ System.out.println("doB"); }
    default void doC(){ System.out.println("doC"); }

}
public class Ex01 {
    static void main() {
        DoA doA = new DoA() {public void doA() {} };

        DoA d1 = () -> { System.out.println("doA"); };

        doA.doA();
        d1.doA();
        doA.doB();
        d1.doB();
        doA.doC();
        d1.doC();

    }
}

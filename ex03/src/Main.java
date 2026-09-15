@FunctionalInterface
interface AA {
    void doA();
}

@FunctionalInterface
interface BB {
    void doB(int num);
}

@FunctionalInterface
interface CC {
    void doC(String num1, String num2);
}

void main() {
    AA a = () -> { System.out.println("AA.doA"); };
    BB b = (int num) -> { System.out.println("BB.doB, num: " + num); };

    a.doA();
    b.doB(10);
}

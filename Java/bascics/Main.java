
public class Main {

    /**
     * This is the main method of the class.
     * It prints "Hello World" to the standard error stream.
     * @param args The command line arguments passed to the program
     */
    public static void main(String[] args) {
      // Call the void function
        arithmeticOperators();
        // Call the void function
        relationalOperators();

      
    }

    //We use staic method so we do not initialize the call
     static void arithmeticOperators() {
        int a = 10;
        int b = 5;
        System.out.println("Arithmetic Operators");
        int sum = a + b;
        System.out.println(sum);
        // subtraction
        int sub = a - b;
        System.out.println(sub);
        // multiplication
        int mul = a * b;
        System.out.println(mul);
        // division
        int div = a / b;
        System.out.println(div);
        // remainder
        int mod = a % b;
        System.out.println(mod);
    }
   static void  relationalOperators() {
        int a = 10;
        int b = 5;
        System.out.println("Relational Operators");
        System.out.println(a > b);
        System.out.println(a < b);
        System.out.println(a == b);
        System.out.println(a != b);
        System.out.println(a >= b);
        System.out.println(a <= b);
    }

    static void logicalOperators() {
        int a = 10;
        int b = 5;
        System.out.println("Logical Operators");
        System.out.println(a > b && a < b);
        System.out.println(a > b || a < b);
        System.out.println(!(a > b));
    }
}
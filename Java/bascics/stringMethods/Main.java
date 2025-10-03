
public class Main {

    /**
     * This is the main method of the class.
     * It prints "Hello World" to the standard error stream.
     * 
     * @param args The command line arguments passed to the program
     */
    public static void main(String[] args) {
        String text= "Adventure";

        //length
        int length = text.length();
        System.out.println("Length: " + length);

        //charAt
        char firstChar = text.charAt(2);
        System.out.println("First Character: " + firstChar);

        String substring = text.substring(1,4);
        System.out.println("Substring: " + substring);
  
        String text1 = "Adventure";
        boolean contains = text1.contains("vent");
        System.out.println("Contains 'vent': " + contains);

        String text2 = text1.replace("e", "a");
        System.out.println("Replace a with e ': " + text2);


        for(int i = 0; i < 2; i++) {
            System.out.println("Iteration " + i);
        }
    }

}


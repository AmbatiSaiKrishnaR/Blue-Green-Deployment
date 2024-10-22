import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
       
        Integer[] array = {1, 2, 3, 4, 5, 6, 7};
        List<Integer> list = Arrays.asList(array);
        Collections.shuffle(list);
        System.out.println("Shuffled Array: " + Arrays.toString(array));

        
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman numeral: ");
        String romanNumeral = scanner.nextLine().toUpperCase();
        try {
            int integer = romanToInteger(romanNumeral);
            System.out.println("The Roman numeral " + romanNumeral + " is equivalent to " + integer);
        } catch (IllegalArgumentException e) {
            System.out.println("Invalid Roman numeral.");
        }

        
        System.out.print("Enter a sentence to check if it's a pangram: ");
        String sentence = scanner.nextLine().toUpperCase();
        if (isPangram(sentence)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static int romanToInteger(String roman) {
        int result = 0;
        int prevValue = 0;

        for (int i = roman.length() - 1; i >= 0; i--) {
            char numeral = roman.charAt(i);
            int value = getRomanValue(numeral);

            if (value < prevValue) {
                result -= value;
            } else {
                result += value;
            }

            prevValue = value;
        }

        return result;
    }

    public static int getRomanValue(char numeral) {
        switch (numeral) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: throw new IllegalArgumentException("Invalid Roman numeral");
        }
    }

    public static boolean isPangram(String inputStr) {
        inputStr = inputStr.toUpperCase();
        for (char ch = 'A'; ch <= 'Z'; ch++) {
            if (inputStr.indexOf(ch) == -1) {
                return false;
            }
        }
        return true;
    }
}

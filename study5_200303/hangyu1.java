package study.algorithm;

public class MiddleCharacter {
    public static void main(String[] args) {
        String word = "abcdef";
        char[] test = word.toCharArray();

        if(test.length % 2 == 0) {
            int mid = test.length / 2;
            for(int i = 1; i >= 0; i--) {
                System.out.print(test[mid-i]);
            }

        } else {
            int mid = test.length / 2;
            System.out.println(test[mid]);
        }

    }
}

package study.algorithm;

public class JadenCase {

    public static void main(String[] args) {
        String test = "3people unFollowed me";
        String[] array = test.split(" ");
        String output = "";
        int size = array.length;

        for(int i = 0; i < array.length; i++) {
            String word = JadenCase.toUpperCase(array[i]);
            output += word;
            if(size != i)
                output += " ";
        }

        System.out.println(output);
    }

    public static String toUpperCase(String s) {
        char[] c = s.toCharArray();
        char[] temp = new char[c.length];
        temp[0] = Character.toUpperCase(c[0]);
        for(int i = 1; i < c.length; i++) {
            temp[i] += c[i];
        }

        return new String(temp);
    }
}

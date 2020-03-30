package study.algorithm;

public class IntegerReturn {

    public static void main(String[] args) {
        int[] case1 = {4,3,2,1};
        int[] case2 = {};

        if(case1.length < 2) {
            System.out.println("-1");

        } else {
            int min = case1[0];
            int[] returnCase = new int[case1.length-1];
            int count = 0;

            for(int n : case1) {
                if(min > n) {
                    returnCase[count++] = min;
                    min = n;
                }
            }

            System.out.println(min);
            for(int n : returnCase) {
                System.out.print(n + " ");
            }
        }

    }
}

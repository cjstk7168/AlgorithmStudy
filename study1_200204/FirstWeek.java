/*
    SC Kim
    Firstweek
 */
public class FirstWeek {

    static void factorial(int n) {
        factorial(n-1, n);
    }

    static void factorial(int n, int sum) {
        if (n==0){
            System.out.println(sum);
            return;
        }
        factorial(n-1, sum * n);
    }

    static void snail(int n){
        int[][] res = new int[n][n];

        int value = 1;
        int i = 0;
        int j = 0;
        int direction = 0;
        while(true){
            if (value == n*n+1) break;
            if(direction % 2 == 0) {
                if (direction % 4 == 0){
                    // Go right
                    while(j < n && res[i][j] == 0){
                        res[i][j++] = value++;
                    }
                    i++; j--;
                }
                else {
                    // Go left
                    while(j > -1 && res[i][j] == 0){
                        res[i][j--] = value++;
                    }
                    i--; j++;
                }
            }
            else{
                if (direction % 4 == 1){
                    // Go down
                    while(i < n && res[i][j] == 0){
                        res[i++][j] = value++;
                    }
                    i--; j--;
                }
                else {
                    // Go up
                    while(i>-1 && res[i][j] == 0){
                        res[i--][j] = value++;
                    }
                    i++; j++;
                }
            }
            direction++;
            continue;
        }

        for (i =0; i < n; i++){
            for (j = 0; j < n; j++){
                System.out.print(res[i][j] + " ");
            }
            System.out.println("");
        }
    }

    public static void main(String[] args){
        //factorial(10);

        snail(6);

    }
}

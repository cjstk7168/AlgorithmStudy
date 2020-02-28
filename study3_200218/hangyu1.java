package dev.study;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ColumnRead {

    public static void main(String[] args) {
        // 키보드 입력
        Scanner sc = new Scanner(System.in);
        // 초기변수 선언
        int count = 0;
        int maxSize = 0;
        char[][] word = new char[5][];

        // 2차원 배열을 가변형으로 선언 및 입력한 값으로 할당
        while(count < 5) {
            String input = sc.next();
            int size = input.length();
            if(size > maxSize) {
                maxSize = size;
            }
            // 입력값을 2차원 char 배열로 가변길이로 저장
            word[count++] = input.toCharArray();
        }

        // 2차원 배열의 새로값을 출력
        for( int x = 0; x < maxSize ; x++) {
            for(int y = 0; y < 5; y++) {
                if(x < word[y].length) {
                    System.out.print(word[y][x]);
                }
            }
        }
    }
}

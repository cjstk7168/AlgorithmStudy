package study.algorithm;

import java.util.Scanner;

public class NextLargeNumber {

    public static void main(String[] args) {

        Scanner s = new Scanner(System.in);
        int num = s.nextInt();
        String convertNum = Integer.toBinaryString(num);
        char[] convertNumArr = convertNum.toCharArray();

        int handleZeroIdx = 0;
        int handleOneCount = 0;

        System.out.println(convertNum);

        for(int i = convertNumArr.length - 1; i >= 0  ; i--) {
            char c = convertNumArr[i];
            if(c == '0' && i != convertNumArr.length - 1) {
                handleZeroIdx = i;
                convertNumArr[i] = '1';
                break;
            }
            if(c == '1') {
                handleOneCount++;
                convertNumArr[i] = '0';
            }
        }

        System.out.println(handleZeroIdx);
        System.out.println(handleOneCount);
        String largeNum;

        if(handleZeroIdx == 0) {
            // 둘째자리 이후에 올림할 0이 없기 때문에 전체 자릿수가 늘어나야 한다
            char[] temp = new char[convertNumArr.length + 1];
            for(int i = 0; i < temp.length; i++) {
                temp[i] = '0'; // 초기화..
            }
            temp[0] = '1';
            // 맨 뒤에부터 변경
            int idx = temp.length - 1;
            for(int count = 1 ; count < handleOneCount; count++) {
                temp[idx] = '1';
                idx--;
            }
            largeNum = new String(temp);
        } else {
            int idx = convertNumArr.length -1;
            for(int count = 1 ; count < handleOneCount; count++) {
                convertNumArr[idx] = '1';
                idx--;
            }
            largeNum = new String(convertNumArr);
        }

        System.out.println(largeNum);
        int test = Integer.parseInt(largeNum, 2);
        System.out.println(test);
    }
}

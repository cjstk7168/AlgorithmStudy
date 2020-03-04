package dev.study;

import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class DiskTree {

    public static void main(String[] arg) {
        // JAVA API 생성
        Scanner sc = new Scanner(System.in);
        StringBuilder builder = new StringBuilder();
        Set<String> directorySet = new TreeSet<>();

        // Path 경로 입력 자료형은 정렬이 될 수 있는 자료구조인 TreeSet으로 저장한다
        System.out.println("전체 경로의 개수를 입력하세요(1~500)");
        int number = sc.nextInt();
        for(int i = 0; i < number; i++) {
            System.out.print("경로명을 입력하세요 : ");
            String path = sc.next();
            directorySet.add(path);
        }

        // 출력(정렬을 따로 구현해야 한다면 자료구조 자체를 만들어도 될 듯
        // 문제빨리 풀려면 만들어진거 사용한다
        for(String path : directorySet) {
            // 경로 구분자로 자름
            String[] output = path.split("/");
            for(int i = 0; i < output.length; i++) {
                // 필요한 만큼 공백을 더한다
                String space = " ";
                for(int j =0; j < i ; j++) {
                    builder.append(space);
                }
                // 출력
                System.out.println(builder.toString() + output[i]);
            }
            // 공백 초기화
            builder.setLength(0);
        }

    }
}

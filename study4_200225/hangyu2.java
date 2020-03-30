package study.algorithm;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class SearchMine {

    static class Mine {

        int x;
        int y;
        int max;

        Mine(int x, int y, int max) {
            this.x = x;
            this.y = y;
            this.max = max;
            // 해당 좌표에 지뢰가 설정될 때 사방팔방의 좌표의 값에 ++1 을 해서 지뢰 위치기준으로 해서 게임을 셋팅
            this.setMineAdjacent();
        }

        private Boolean equal(int x, int y) {
            if(this.x == x && this.y == y)
                return true;
            else
                return false;
        }

        private void setMineAdjacent() {

            countingMineAround(this.x-1, this.y-1, this.max);
            countingMineAround(this.x-1, this.y, this.max);
            countingMineAround(this.x-1, this.y+1, this.max);
            countingMineAround(this.x, this.y-1, this.max);
            countingMineAround(this.x, this.y+1, this.max);
            countingMineAround(this.x+1, this.y-1, this.max);
            countingMineAround(this.x+1, this.y, this.max);
            countingMineAround(this.x+1, this.y+1, this.max);

        }

        private void countingMineAround(int x, int y, int max){
            // ArrayIndexOutOfBoundsException 예방
            if(x < 0 || x > max || y < 0 || y > max){
                return;
            }

            if(grid[x][y] == -1) {
                return;
            } else {
                grid[x][y] += 1;
            }
        }
    }

    private static List<Mine> mineList = new ArrayList<>();
    private static int[][] grid;

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();
        // 가로 세로 높이가 같은 정사각형 배열 크기를 입력 받아 설정
        String input = sc.next();
        int size = Integer.parseInt(input);
        grid = new int[size][size];

        System.out.println(input);

        // 전체 지뢰 개수를 입력 받아 설정 (크기 비교)
        input = sc.next();
        int number = Integer.parseInt(input);
        if(number <= size * size) {
            // 지뢰 개수 만큼 mine class 생성 (속성은 x, y 좌표 값)
            Random r = new Random();
            int count = 0;
            boolean isAdd = true;
            while(count < number) {

                int x = r.nextInt(size);
                int y = r.nextInt(size);

                // 좌표에 중복이 있는지 확인 후 모든 지뢰에 문제가 없으면 좌표대로 배열에 지뢰를 표시(ex: -1)
                for(Mine m : mineList) {
                    if(m.equal(x, y) == true) {
                        isAdd = false;
                    }
                }

                if(isAdd == true) {
                    mineList.add(new Mine(x, y, size-1));
                    grid[x][y] = -1;
                    count++;
                }
            }

            // 모두 완료되면 지뢰판을 출력하고 종료
            for(int i=0; i<size; i++){
                for (int j=0; j<size; j++) {
                    System.out.print(grid[i][j]);
                }
                System.out.println();
            }
        }
    }
}

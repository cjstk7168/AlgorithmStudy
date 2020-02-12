using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AlgorithmStudy
{
    class Snail
    {
        /* 문제정의 
         * 1. 입력받은 수 길이의 정사각형을 생성하며 해당 좌표에 +1씩 증가하는 숫자를 입력한다 
         * 2. 가장자리 부위의 정사각형을 지나고 나면 내부에 -1 감소된 정사각형을 그린다 
         * 3. 가장 중점의 정사각형을 그리고 나면 해당 문제는 해결 된다 
         * 
         * 공통패턴 
         * (0,0)에서 시작한다
         * column 의 증감은 0 ~ (n-1) 이며 column 이 증가 될 때 row의 값은 고정이다 || column 증가 | row 고정
         * row의 증감은 0 ~ (n-1) 이며 column이 (n-1)에 도달 했을 때 row의 값은 증감한다 || column n-1 로 고정 | row 증가 
         * column 의 감소는 (n-1) ~ 0 이며 column 이 감소될 때 row의 값은 고정이다 || column 감소 | row 고정 
         * row의 감소는 (n-1) ~ 0 이며 column이 0에 도달했을 때 row 값은 감소한다 || column 0 로 고정 | row 감소
         * 
         * 위 4개의 패턴을 1회 완수할 경우 (+1, +1) 평행 이동 후 동일한 작업을 반복한다 
         * **/  

        static void Main()
        {
            Console.WriteLine("plz enter a number");
            Console.Write("input : ");
            int n = Convert.ToInt32(Console.ReadLine());

            int[,] array = new int[n,n];

            int adding = 1;
            int col = 0;
            int row = 0;

            int col_max = n;
            int row_max = n;
            int col_min = 0;
            int row_min = 0;

            // 모든 좌표에 대한 값을 넣으면 탈출하면 된다
            // 횟수는 사각형의 전체 길이 만큼 도는 것이 아니라 (-1,-1) 만큼 줄어든 사각형을 표현하면 되기에 
            // 짝수일 경우는 크기가 (-1,-1) 줄어든 정사각형의 부분집합이므로 n/2 로 하면 되고 
            // 홀수일 경우는 크기가 (-1,-1) 줄어든 정사각형의 부분집합에서 가장 중심인 사각형 하나를 포함하므로 n/2 + 1 을 해준다
            int count = n % 2 == 0 ? n/2 : (n/2)+1;
           
            while(true)
            {
                // 좌측 증가
                for(; col < col_max; col++)
                {
                    array[row, col] = adding++;
                }
                col--;  // 마지막에 한번 돌면서 증가시켜서 감소
                row++;  // 아랫줄로 이동한 다음에 값을 adding 할 것이기에 증가

                // 하측 증가
                for(; row < row_max; row++)
                {
                    array[row, col] = adding++;
                }
                row--;  // 마지막에 한번 돌면서 증가시켜서 감소
                col--;  // 원점(우측)방향으로 이동한 다음에 값을 adding 할 것이기에 감소

                // 우측 감소
                for(; col > col_min; col--)
                {
                    array[row, col] = adding++;
                }
                // 마지막에 한번 돌면서 최소 값 0과 == 동일해 지기 때문에 추가 보정이 없다 
                // 즉 큰 사각형을 다 만들고 나면 보정없이 작은사각형을 만들 준비가 된다

                // 상측 감소
                for(; row > row_min; row--)
                {
                    array[row, col] = adding++;
                }
                // 마지막에 한번 돌면서 최소 값 0과 == 동일해 지기 때문에 추가 보정이 없다 
                // 즉 큰 사각형을 다 만들고 나면 보정없이 작은사각형을 만들 준비가 된다

                // 원점(0,0) 부터 대해 (1,1)로 평행이동함을 나타낸다 
                col++;
                row++;
                // 최대와 최소를 줄이는 이유는 가로와 세로 모두 1칸씩 줄어든 작아진 네모를 표현해야 하므로 줄인다 
                // 평행 이동 했기 때문에 새로운 좌표에서 시작하며 (-1, -1)로 줄어든 네모를 아래에서 만들기 때문에 달팽이 모양이 만들어 진다 
                col_max--;
                row_max--;
                col_min++;
                row_min++;

                if(count == 0)
                {
                    break;
                }
                count--;

                Console.WriteLine();
                // 정사각형이 만들어지는 순간마다 출력 / 한번에 완성된걸 보려면 범위를 밖에서 그리면 된다
                for (int i = 0; i < n; i++)
                {
                    for (int j = 0; j < n; j++)
                    {
                        Console.Write(array[i,j] + "\t");
                    }
                    Console.WriteLine();
                }

            }

        }
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace AlgorithmStudy
{
    class Delivery
    {
        static void Main()
        {
            // [1] 문제정의 
            // 설탕 무게를 입력받는다 무게를 입력받고 3kg, 5kg 으로 균등하게 봉달로 배달된다 

            // [2] 제약조건 
            // 정확히 3과 5로 균등하게 나누어 져야 하며 생성되는 봉달의 수는 최소한의 개수가 나와야 한다 
            // number = 5n + 3m 일 때 n이 최대가 되는 정수가 된다 

            // [3] 접근방법
            // n이 최대가 되려면 3의 배수의 개수가 최소가 될 때 5로 나누어 떨어져야 한다 
            // 즉, number -= 3을 반복해서 수행할 때 최대가 되는 5의 배수를 찾아야 한다 
            // 수 체계에서 5는 소수이므로 3씩 차감된 수는 5의 곱으로 나올 수 있다 // 이유: 모든 자연수는 소수들의 곱으로 유일하게 나타낼 수 있다
            // 5와 3의 조합으로 나오지 않는 수는 -1을 출력한다 // ex) 4 = -1 출력
            
            Console.WriteLine("설탕의 무게를 입력하시오");
            Console.Write("무게 : ");
            int weight = Convert.ToInt32(Console.ReadLine());

            int threePack = 0;
            int fivePack = 0;
            int totalPack = 0;
            while (true)
            {
                int remainder = weight % 5;
                if (remainder != 0)
                {
                    weight = weight - 3;
                    if(weight < 0)
                    {
                        Console.WriteLine("배달 불가 : -1");
                        return;
                    }
                    threePack++;
                }
                else
                {
                    fivePack = weight / 5;
                    break;
                }
            }
            totalPack = fivePack + threePack;
            Console.WriteLine($"총합 {totalPack.ToString()} = 5kg : {fivePack.ToString()}, 3kg : {threePack.ToString()}");
        }
    }
}

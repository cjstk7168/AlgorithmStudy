using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AlgorithmStudy
{
    class Snail
    {
        static void Main()
        {
            Console.WriteLine("plz enter a number");
            Console.Write("input : ");
            int n = Convert.ToInt32(Console.ReadLine());

            int[,] array = new int[n, n];
            
            int x = 0;
            int y = -1;
            int adjust = 1;
            int num = 1;
            int max = n;

            while (0 < max)
            {
                for(int i = 0; i < max; i++ )
                {
                    y = y + adjust;
                    array[x,y] = num;
                    num++;
                }

                max--;

                for (int i = 0; i < max; i++)
                {
                    x = x + adjust;
                    array[x,y] = num;
                    num++;
                }

                adjust = adjust * -1;

            }

           for(int i = 0; i < n; i++)
           {
                for(int j = 0; j < n; j++)
                {
                    Console.Write($"[{array[i, j]}]\t");
                }
                Console.WriteLine();
           }
        }
    }
}

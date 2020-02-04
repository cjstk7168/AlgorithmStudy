using System;

namespace AlgorithmStudy
{
    class Factorial
    {
        static void Main(string[] args)
        {
            while(true)
            {
                Console.WriteLine("plz enter a number from 0 to 15\n");
                Console.Write("input : ");
                try
                {
                    int n = Convert.ToInt32(Console.ReadLine());
                    if (n > 0 && n < 15)
                    {
                        Console.WriteLine("Factorial : " + Fact(n));
                        break;
                    }
                    else
                    {
                        Console.WriteLine("the number is out of range ");
                    }
                }
                catch(FormatException ex)
                {
                    Console.WriteLine(ex.Message);
                }
                
            }
            Console.WriteLine("end");
        }

        static int Fact(int i)
        {
            if (i == 1)
                return 1;

            return i * Fact(i - 1);
        }
    }
}

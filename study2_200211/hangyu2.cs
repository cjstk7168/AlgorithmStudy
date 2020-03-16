using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using static System.Console;

namespace AlgorithmStudy
{
    class LRU_Caching
    {
        // 제약조건 상수
        private const int MIN_CACHE = 0;
        private const int MAX_CACHE = 30;
        private const int MAX_SIZE = 100000;
        // 캐시 
        private static Dictionary<string, Cache> cache = new Dictionary<string, Cache>();
        class Cache
        {
            /// <summary>
            /// 캐시 이름
            /// </summary>
            public string Name { get; set; }
            /// <summary>
            /// 캐시된 시간
            /// </summary>
            public long TimeStamp { get; set; }
        }

        static void Main()
        {
            while(true)
            {
                // 캐시의 크기를 입력받는다
                WriteLine("cache 크기를 입력하세요");
                Write("크기 : ");
                int cacheSize = Convert.ToInt32(ReadLine());
                if (MIN_CACHE <= cacheSize && MAX_CACHE >= cacheSize)
                {
                    ConsoleKeyInfo input;
                    int idx = 0;
                    string[] cities = new string[MAX_SIZE];

                    // 도시이름을 입력받는다
                    do
                    {
                        WriteLine("진행하려면 아무키나 누르고, 종료하려면 esc를 누릅니다");
                        input = Console.ReadKey(true);
                        if (input.Key != ConsoleKey.Escape)
                        {
                            WriteLine("도시 이름을 입력하세요");
                            string city = ReadLine();
                            // 대소문자 비교를 위해 저장할 때 소문자로 일치시킨다
                            cities[idx++] = city.ToLower();
                        }
                        else
                        {
                            break;
                        }
                    } while (idx < MAX_SIZE);

                    // [TEST]
                    //string[] cities = new string[] { "Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome", };
                    //string[] cities = new string[] { "Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome" };
                    //string[] cities = new string[] { "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"};
                    //string[] cities = new string[] { "Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA" };


                    WriteLine("\n출력");
                    for (int i = 0; i < idx; i++)
                    {
                        WriteLine(cities[i]);
                    }

                    
                    WriteLine("\nCalculate cache!!");

                    int totalTime = Calculate(cacheSize, cities);

                    WriteLine($"it takes time :  {totalTime.ToString()}");
                    return;
                }
                else
                {
                    WriteLine("cache 크기를 다시 입력하세요\n");
                }
            }
        }

        static int Calculate(int cacheSize, string[] cities)
        {
            // 토탈 소비된 시간 변수
            int time = 0;

            // 초기 입력에는 무조건 캐싱한다
            int idx = 0;
            for( ; idx < cacheSize; idx++)
            {
                // 동일시간내에 캐시추가를 방지
                Thread.Sleep(1);
                LRU_Caching.cache.Add(cities[idx].ToLower(), new Cache()
                {
                    Name = cities[idx],
                    TimeStamp = ((DateTimeOffset)DateTime.Now).ToUnixTimeMilliseconds()
                });
                time += 5;
            }

            for(; idx < cities.Length; idx++)
            {
                // 원래는 리스트를 사용하겠지만 배열로 했기 때문에 null 체크로 종료여부를 가린다
                if (cities[idx] == null)
                    break;

                // 캐싱할 대상이 있으면 소모된 시간은 1증가하고 해당 데이터의 캐싱 시간을 갱신한다
                if(LRU_Caching.cache.TryGetValue(cities[idx].ToLower(), out Cache value) == true)
                {
                    WriteLine($"cache hit!! hello {cities[idx]}");
                    value.TimeStamp = ((DateTimeOffset)DateTime.Now).ToUnixTimeMilliseconds();
                    time += 1;
                }
                else
                {
                    // 캐시 사이즈가 없을 경우에는 삭제 없이 총 시간을 계산한다
                    if(LRU_Caching.cache.Count != 0)
                    {                        
                        // c#의 특성이며 다른 언어에 없는 Linq를 써서 알고리즘 성격에 좀 맞지 않지만 요구사항에서 시간으로 계산이 있었기 때문에 아래와 같이 가장 오래지난 시간을 정렬해서 계산한다 
                        // 아래의 계산은 for문을 것과 같기 때문에 성능상 이점을 가지려면 yield return을 해서 전체를 돌지 않아야 한다 
                        // 원래 c#의 캐시를 구현한다면 따로 class로 구현하겠지만 약식 구현이기 때문에 추후 개선한다
                        Cache fistCacheItem = LRU_Caching.cache.Values.OrderBy(x => x.TimeStamp).First();                        
                        if (LRU_Caching.cache.Remove(fistCacheItem.Name.ToLower()) == true)
                        {
                            WriteLine($"cache remove!! {fistCacheItem.Name}, {fistCacheItem.TimeStamp}");
                        }
                    }
                    // 동일시간내에 캐시추가를 방지
                    Thread.Sleep(1);
                    // index 순번에 맞추어 캐싱을 추가한다 
                    LRU_Caching.cache.Add(cities[idx].ToLower(), new Cache()
                    {
                        Name = cities[idx],
                        TimeStamp = ((DateTimeOffset)DateTime.Now).ToUnixTimeMilliseconds()
                    });
                    WriteLine($"add {cities[idx]}");
                    time += 5;
                }
            }
                       
            return time;
        }

       
    }
}

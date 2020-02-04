import heapq


def solution(cache_size, datas):
    cost = 0
    cache = dict()
    # O(N)
    for idx, data in enumerate(datas):
        if cache.get(data, False):
            cost += 1
            cache[data] = idx + 1
        else:
            if len(cache) == cache_size:
                extracted_key = None
                min_value = float("inf")
                # O(30)
                for key, value in cache.items():
                    if value < min_value:
                        extracted_key = key
                        min_value = value
                del cache[extracted_key]
            cache[data] = idx + 1
            cost += 5
    return cost


print(
    solution(
        3,
        [
            "Jeju",
            "Pangyo",
            "Seoul",
            "NewYork",
            "LA",
            "Jeju",
            "Pangyo",
            "Seoul",
            "NewYork",
            "LA",
        ],
    )
)
print(
    solution(
        3,
        [
            "Jeju",
            "Pangyo",
            "Seoul",
            "Jeju",
            "Pangyo",
            "Seoul",
            "Jeju",
            "Pangyo",
            "Seoul",
        ],
    )
)
print(
    solution(
        5,
        [
            "Jeju",
            "Pangyo",
            "Seoul",
            "NewYork",
            "LA",
            "SanFrancisco",
            "Seoul",
            "Rome",
            "Paris",
            "Jeju",
            "NewYork",
            "Rome",
        ],
    )
)

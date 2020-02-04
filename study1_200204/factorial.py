def solution(n: int):
    if n == 0:
        return 0
    ret = 1
    while n > 1:
        ret *= n
        n -= 1
    return ret


N = int(input())
print(solution(N))

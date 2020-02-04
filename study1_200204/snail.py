
N = int(input())

matrix = [[0 for _ in range(N)] for _ in range(N)]

DIRECTIONS = ((0, 1), (1, 0), (0, -1), (-1, 0))

direction = 0
x, y = 0, 0
i = 1
finish = N ** 2
while i <= finish:
    matrix[x][y] = i
    dx, dy = DIRECTIONS[direction]
    nx, ny = x + dx, y + dy

    if not (0 <= nx < N and 0 <= ny < N) or matrix[nx][ny] != 0:
        direction += 1
        direction %= 4
        dx, dy = DIRECTIONS[direction]
        nx, ny = x + dx, y + dy

    x, y = nx, ny
    i += 1

for _ in range(N):
    print("|     ", end="")
print("|")
for _ in range(N):
    print("| :--: ", end="")
print("|")
for row in matrix:
    for num in row:
        print(f"|{num:^10}", end="")
    print("|")
def answer1():
    data = []
    max_length = 0
    for _ in range(5):
        row = input()
        max_length = max(max_length, len(row))
        data.append(row)

    ret = []
    for c in range(max_length):
        for r in range(5):
            if len(data[r]) > c:
                ret.append(data[r][c])

    print(''.join(ret))

def answer1(words):
    max_length = max([len(word) for word in words])

    ret = []
    for c in range(max_length):
        for r in range(len(words)):
            if len(words[r]) > c:
                ret.append(words[r][c])

    return "".join(ret)


print(answer1(["ABCDE", "abcde", "01234", "FGHIJ", "fghij",]))


n = int(input())
ret = []
paths = []
for _ in range(n):
    path = input().split("\\")
    paths.append(path)

paths.sort()
directory_stack = []
for path in paths:
    directories = path
    depth = 0
    for directory in directories:
        if len(directory_stack) > depth and directory == directory_stack[depth]:
            depth += 1
        else:
            directory_stack = directory_stack[:depth]
            directory_stack.append(directory)
            ret.append(f"{'_' * depth }{directory}")
            depth += 1

for r in ret:
    print(r)
        


def answer2(paths):
    result = []
    paths = [path.split("\\") for path in paths]
    paths.sort()
    path_stack = []
    for path in paths:
        depth = 0
        for idx, directory_name in enumerate(path):
            if len(path_stack) <= idx:
                path_stack.append(directory_name)
                result.append("_" * depth + directory_name)
            else:
                if path_stack[idx] != directory_name:
                    path_stack = path_stack[:idx]
                    path_stack.append(directory_name)
                    result.append("_" * depth + directory_name)
            depth += 1

    return result


print(
    answer2(
        [
            "WINNT\SYSTEM32\CONFIG",
            "GAMES",
            "WINNT\DRIVERS",
            "HOME",
            "WIN\SOFT",
            "GAMES\DRIVERS",
            "WINNT\SYSTEM32\CERTSRV\CERTCO~1\X86",
        ]
    )
)

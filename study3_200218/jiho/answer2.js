const answer2 = paths => {
  result = [];
  paths = paths.map(path => path.split("\\"));
  paths.sort();
  path_stack = [];
  for (let path of paths) {
    depth = 0;
    for (let idx = 0; idx < path.length; idx++) {
      if (idx >= path_stack.length) {
        path_stack.push(path[idx]);
        result.push(`${"_".repeat(depth)}${path[idx]}`);
      } else {
        if (path_stack[idx] !== path[idx]) {
          path_stack = path_stack.slice(0, idx);
          path_stack.push(path[idx]);
          result.push(`${"_".repeat(depth)}${path[idx]}`);
        }
      }
      depth++;
    }
  }
  return result;
};

console.log(
  answer2([
    "WINNT\\SYSTEM32\\CONFIG",
    "GAMES",
    "WINNT\\DRIVERS",
    "HOME",
    "WIN\\SOFT",
    "GAMES\\DRIVERS",
    "WINNT\\SYSTEM32\\CERTSRV\\CERTCO~1\\X86"
  ])
);

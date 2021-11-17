export class Stack<T> {
  private values: T[] = [];
  push(val: T): void {
    this.values.push(val);
  }

  pop(): T {
    return this.values.pop();
  }

  top(): T | undefined {
    return this.values.slice(-1)[0];
  }
}

export function matchParen(lParen: string, rParen: string): boolean {
  if (
    (lParen === "(" && rParen === ")") ||
    (lParen === "[" && rParen === "]") ||
    (lParen === "<" && rParen === ">") ||
    (lParen === "{" && rParen === "}")
  ) {
    return true;
  }
  return false;
}

function split(formula: string): string[] {
  const segments = [];
  for (let i = 0; i < formula.length; ) {
    if (["*", "(", "[", "{", ")", "]", "}"].includes(formula[i])) {
      segments.push(formula[i]);
      i++;
    } else if (/[A-Z]/.test(formula[i])) {
      if (/[a-z]/.test(formula[i + 1])) {
        segments.push(formula.substring(i, i + 2));
        i += 2;
      } else {
        segments.push(formula.substring(i, i + 1));
        i++;
      }
    } else if (/[0-9]/.test(formula[i])) {
      let num = formula[i];
      i++;
      while (/[0-9]/.test(formula[i])) {
        num += formula[i];
        i++;
      }
      segments.push(num);
    } else if (formula[i] === " ") {
      i++;
    } else {
      throw new Error(`Parsing Error at position ${i}: '${formula[i]}'`);
    }
  }
  return segments;
}

export function tokenize(formula: string): Token[] {
  const segments = split(formula);
  return segments.map((seg) => {
    if (seg === "(" || seg === "[" || seg === "{") {
      return { type: "lParen", value: seg };
    } else if (seg === ")" || seg === "]" || seg === "}") {
      return { type: "rParen", value: seg };
    } else if (seg === "*") {
      return { type: "join", value: seg };
    } else if (/\d+/.test(seg)) {
      return { type: "number", value: Number(seg) };
    } else {
      return { type: "atom", value: seg };
    }
  });
}

import { Stack, matchParen } from "./utils";

function generateAST(tokens: Token[]) {
  const ast = { children: [], count: 1, parent: null };
  let curNode = ast;
  const parenStack = new Stack<string>();
  tokens.forEach((token, index) => {
    switch (token.type) {
      case "number": {
        curNode.count = token.value;
        break;
      }
      case "lParen": {
        parenStack.push(token.value);
        const newNode = { parent: curNode, children: [], count: 1 };
        curNode.children.push(newNode);
        curNode = newNode;
        break;
      }
      case "rParen": {
        const last = parenStack.top();
        if (!last || !matchParen(last, token.value)) {
          throw new Error("Parsing error: parentheses don't match");
        }
        curNode = curNode.parent;
        break;
      }
      case "atom": {
        const newNode = { parent: curNode, children: [token.value], count: 1 };
        curNode.children.push(newNode);
        if (tokens[index + 1]?.type === "number") curNode = newNode;
        break;
      }
    }
  });
}

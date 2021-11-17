type Atom = {
  type: "atom";
  value: string;
};

type Coefficient = {
  type: "number";
  value: number;
};

type LParen = {
  type: "lParen";
  value: "(" | "[" | "{";
};

type RParen = {
  type: "rParen";
  value: ")" | "]" | "}";
};

type Join = {
  type: "join";
  value: "*";
};

type Token = Atom | Coefficient | LParen | RParen | Join;

type TreeNode = {
  count: number;
  children: (TreeNode | string)[];
  parent: TreeNode;
};

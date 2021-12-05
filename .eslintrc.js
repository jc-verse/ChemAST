module.exports = {
  root: true,
  env: {
    jest: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};

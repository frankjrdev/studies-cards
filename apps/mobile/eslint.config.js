import eslint from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";

export default [
  eslint.configs.recommended,
  {
    extends: ["../../.eslintrc.json"],
    files: ["**/*.ts", "**/*.tsx", "**/*.d.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "@typescript-eslint": ts,
    },
    rules: {
      ...ts.configs.recommended.rules,
      "prettier/prettier": "warn",
    },
  },
  prettier,
];

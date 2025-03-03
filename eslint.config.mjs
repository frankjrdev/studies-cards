import eslint from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  eslint.configs.recommended,
  {
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
      prettier: prettierPlugin,
    },
    rules: {
      ...ts.configs.recommended.rules,
      "prettier/prettier": "error", // Cambiado a "error" para asegurarnos de que se ejecute
    },
  },
  prettier,
];

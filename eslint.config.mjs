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
        project: "apps/web/tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    globals: {
      console: "readonly",
    },
    env: {
      browser: true, // Habilita las variables globales del navegador
      node: true, // Habilita las variables globales de Node.js
    },
    plugins: {
      "@typescript-eslint": ts,
      prettier: prettierPlugin,
    },
    rules: {
      ...ts.configs.recommended.rules,
      "prettier/prettier": "error",
      "no-undef": "off",
      // Cambiado a "error" para asegurarnos de que se ejecute
    },
  },
  prettier,
];

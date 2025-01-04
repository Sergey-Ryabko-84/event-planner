import globals from "globals";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import * as emotion from "@emotion/eslint-plugin";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        },
        project: ["./tsconfig.app.json", "./tsconfig.node.json"]
      },
      globals: globals.browser
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react,
      "@emotion": emotion
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/no-unknown-property": ["error", { ignore: ["css"] }],
      "@emotion/import-from-emotion": "error",
      "@emotion/no-vanilla": "error",
      "@emotion/syntax-preference": ["error", "string"]
    }
  }
];

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    name: "eslint",
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {},
    files: ["src/**/*.ts"],
  },
  {
    name: "scripts",
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { console: "readonly", process: "readonly" },
    },
    files: ["scripts/**/*.mjs"],
  },
  eslintPluginPrettierRecommended,
  {
    ignores: ["cjs/", "esm/", "node_modules/", "src/generated/"],
  },
);

import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // eslint-plugin-react-hooks rules replaced by Biome
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/exhaustive-deps": "off",
      // eslint-plugin-next rules replaced by Biome
      "@next/next/google-font-display": "off",
      "@next/next/no-document-import-in-page": "off",
      "@next/next/no-head-element": "off",
      "@next/next/no-head-import-in-document": "off",
      "@next/next/no-img-element": "off",
      // Biome recommended rules
      "jsx-a11y/no-access-key": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-return": 'off',
      "@typescript-eslint/no-explicit-any": 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      "@typescript-eslint/no-confusing-void-expression": 'off',
      "@typescript-eslint/no-unsafe-member-access": 'off'
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);

export default eslintConfig;

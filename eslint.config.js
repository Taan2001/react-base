// eslint.config.js
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import prettierPlugin from 'eslint-plugin-prettier';
import globalsPkg from 'globals';

const { browser } = globalsPkg;

export default [
  js.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...browser,
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      tailwindcss: tailwindPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // ===== prettier rules =====
      'prettier/prettier': 'error',

      // ==========================

      // ===== React hooks rules =====
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // =============================

      // ===== React Refresh rules =====
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
      // ===============================

      // ===== typescript rules =====
      'no-sparse-arrays': 'error',
      'no-invalid-regexp': 'error',
      'no-inner-declarations': 'error',
      'no-func-assign': 'error',
      'no-extra-semi': 'error',
      'no-extra-boolean-cast': 'error',
      'no-ex-assign': 'error',
      'no-empty': 'error',
      'no-empty-character-class': 'error',
      'no-duplicate-case': 'error',
      'no-dupe-keys': 'error',
      'no-dupe-args': 'error',
      'no-control-regex': 'error',
      'no-constant-condition': 'error',
      'no-cond-assign': 'error',
      'no-unused-vars': 'off',
      // 'no-useless-concat': 'error',
      'no-use-before-define': 'off',
      // 'no-mixed-operators': 'error',
      'default-case': 'error',
      'consistent-return': 'error',
      'for-direction': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable': 'error',
      'no-redeclare': 'error',
      'no-new': 'error',
      'no-this-before-super': 'error',
      // 'no-await-in-loop': 'error',
      'no-floating-decimal': 'error',
      'no-class-assign': 'error',
      'no-const-assign': 'error',
      'use-isnan': 'error',
      // 'no-useless-rename': 'error',
      'no-duplicate-imports': 'error',
      'no-array-constructor': 'error',
      'no-useless-escape': 'error',
      'valid-typeof': 'error',
      'max-depth': [2, 4],
      // 'array-callback-return': 'error',
      'arrow-body-style': 'off',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-else-return': 'error',
      'no-caller': 'error',
      'consistent-this': 'error',
      'no-invalid-this': 'error',
      'no-loop-func': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-proto': 'error',
      'no-prototype-builtins': 'error',
      'no-global-assign': 'error',
      'no-implicit-coercion': 'error',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      // 'no-negated-condition': 'error',
      'no-restricted-properties': 'error',
      complexity: ['error', 40],
      'block-scoped-var': 'error',
      'constructor-super': 'error',
      'default-case-last': 'error',
      // 'func-names': 'error',
      'id-denylist': 'error',
      'guard-for-in': 'error',
      'init-declarations': ['error', 'always'],
      'lines-between-class-members': ['error', 'always'],
      'max-classes-per-file': ['error', 2],
      'no-shadow': 'off',
      'no-compare-neg-zero': 'error',
      'max-statements-per-line': ['error', { max: 2 }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none', argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
      '@typescript-eslint/no-var-requires': 'off',
      // ============================
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  // prettierPlugin,
];

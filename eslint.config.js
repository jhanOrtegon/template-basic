import path from 'node:path'
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import sonarjs from 'eslint-plugin-sonarjs'
import a11y from 'eslint-plugin-jsx-a11y'
import eslintPluginImport from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'

const project = path.resolve('./tsconfig.app.json')

export default tseslint.config(
  { ignores: ['dist', 'build', 'node_modules'] },

  // Config sin type-checking para archivos .d.ts y vite.config.ts
  {
    files: ['**/*.d.ts', 'vite.config.ts'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // Config principal con type-checking estricto
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['vite.config.ts'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project,
        tsconfigRootDir: path.resolve(),
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      sonarjs,
      'jsx-a11y': a11y,
      import: eslintPluginImport,
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended[0].rules,
      ...tseslint.configs.recommended[1].rules,
      ...reactHooks.configs.recommended.rules,
      ...sonarjs.configs.recommended.rules,
      ...a11y.configs.recommended.rules,

      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'error',

      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-implicit-coercion': 'error',
      'prefer-const': 'error',

      'no-magic-numbers': [
        'warn',
        {
          ignore: [0, 1, -1],
          ignoreArrayIndexes: true,
          enforceConst: true,
          detectObjects: true,
        },
      ],

      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
        },
      ],

      '@typescript-eslint/naming-convention': [
        'error',

        // Variables
        { selector: 'variable', modifiers: ['const'], format: ['camelCase', 'UPPER_CASE'] },
        { selector: 'variable', format: ['camelCase'] },
        {
          selector: 'variable',
          modifiers: ['exported'],
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },

        // Funciones
        { selector: 'function', modifiers: ['exported'], format: ['PascalCase'] },
        { selector: 'function', modifiers: ['async'], format: ['camelCase'] },
        { selector: 'function', format: ['camelCase'] },

        // Métodos
        { selector: 'classMethod', modifiers: ['static'], format: ['camelCase'] },
        {
          selector: 'classMethod',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
        { selector: 'classMethod', format: ['camelCase'] },

        // Propiedades
        { selector: 'classProperty', modifiers: ['readonly'], format: ['camelCase', 'UPPER_CASE'] },
        {
          selector: 'classProperty',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
        { selector: 'classProperty', format: ['camelCase'] },

        // Tipos
        { selector: 'typeLike', format: ['PascalCase'] },
        { selector: 'enumMember', format: ['UPPER_CASE'] },

        // Parámetros
        {
          selector: 'parameter',
          modifiers: ['unused'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
        { selector: 'parameter', format: ['camelCase'] },

        // Propiedades externas (como de APIs)
        { selector: 'property', format: null },
      ],

      // React específico
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
)

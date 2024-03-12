module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'vue', 'prettier', 'import', 'unused-imports'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [['builtin', 'external', 'internal']],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
    ],
    'vue/multi-word-component-names': 'off',
    'vue/valid-template-root': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    '@typescript-eslint/ban-ts-comment': 'off'
  }
}

module.exports = {
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs'
  ],
  rules: {
    'space-before-function-paren': ['error', 'always'],
    '@typescript-eslint/no-unused-vars': 'error'
  }
}

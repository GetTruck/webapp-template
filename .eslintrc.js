module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/recommended",
    "@vue/typescript"
  ],
  // required to lint *.vue files
  plugins: [
    "vue",
    "@typescript-eslint"
  ],
  // add your custom rules here
  rules: {
    indent: 'off',
    // camelcase: 'off',
    'nuxt/no-cjs-in-config': 'off',
    // // or
    "comma-dangle": ["error", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "never",
        "exports": "never",
        "functions": "ignore"
    }],
    semi: ['error', 'always'],
    '@typescript-eslint/indent': ["error", 2],
    // '@typescript-eslint/camelcase': ["error", {allow: ["app_id", "app_code"]}]
  }
}

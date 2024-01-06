module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "vue/script-setup-no-uses-vars": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-v-html": "off",
    eqeqeq: "off",
    "vue/v-slot-style": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        semi: true,
        singleQuote: false,
      },
    ],
  },
};
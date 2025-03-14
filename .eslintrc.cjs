const tailwindConfig = require("./tailwind.config.js");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxt/eslint-config",
    "plugin:tailwindcss/recommended",
    "plugin:prettier/recommended",
  ],
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
    "tailwindcss/no-custom-classname": [
      1,
      {
        config: tailwindConfig,
      },
    ],
  },
};

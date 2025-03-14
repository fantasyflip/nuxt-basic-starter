import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

import tailwindPlugin from "eslint-plugin-tailwindcss";

import withNuxt from "./.nuxt/eslint.config.mjs";

const tailwindConfig = (await import("./tailwind.config.js")).default;

export default withNuxt({
  plugins: {
    prettier: prettierPlugin,
    tailwindcss: tailwindPlugin,
  },
  rules: {
    // ...prettierPlugin.configs.recommended.rules,
    ...eslintConfigPrettier.rules,
    ...eslintPluginPrettierRecommended.rules,
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
});

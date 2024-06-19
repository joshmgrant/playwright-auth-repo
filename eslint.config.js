import antfu from '@antfu/eslint-config';

export default antfu({
  unocss: true,
  vue: true,
  typescript: true,
  rules:{
    // TODO: We need to remove these rules and fix the issues
    "vue/custom-event-name-casing": "off",
    "ts/no-use-before-define": "off",
    "vue/eqeqeq": "off",
    "eqeqeq": "off",

    "node/prefer-global/process": "off",
    "unicorn/prefer-dom-node-text-content": "off",
    "antfu/top-level-function": "off",
    "style/semi": "off",
    "curly": "off",
  },
  ignores: [".gitignore"],
});

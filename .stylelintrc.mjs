/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-recommended-scss", "stylelint-config-recess-order"],
  plugins: ["stylelint-order"],
  rules: {
    // ::before, ::afterのコロンを2つにする
    "selector-pseudo-element-colon-notation": "double",
    // クラス名でアンパサンド（&）は禁止（&:hoverなどはOK）
    "scss/selector-no-union-class-name": null,
    // SCSSの並び順（変数、宣言、ネスト、@ルール）
    "order/order": ["custom-properties", "dollar-variables", "declarations", "rules", "at-rules"],
  },
  ignoreFiles: ["**/node_modules/**"],
}

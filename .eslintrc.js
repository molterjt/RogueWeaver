module.exports = {
  parserOptions: {
     parser: 'babel-eslint',
      ecmaVersion: 2017,
      sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended' // or 'plugin:vue/base'
  ],
  plugins: [
    'import',
    'compat',
  ],
  env: {
    'browser': true,
    'node': true,
  },
  settings: {
    'import/resolver': 'webpack'
  },
  globals: {
    "store": true
  },
  rules: {
    "class-methods-use-this": "off",
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never"
    }],
    "compat/compat": 2,
    "func-names": ["error", "never"],
    //"func-names": ["error", "as-needed"],
    "import/extensions": ["error", "never"],
    "import/prefer-default-export": ["warn"],
    "indent": ["error", 2, {
      "VariableDeclarator": { "var": 2, "let": 2, "const": 3 },
      "SwitchCase": 1
    }],
    "key-spacing": ["error", {
      "align": {
        "beforeColon": true,
        "afterColon": true,
        "on": "colon"
      }
    }],
    "newline-before-return": ["error"],
    "no-console": ["warn", {
      "allow": ["warn", "error"]
    }],
    "no-multi-spaces": ["off", {
      "exceptions": {
        "VariableDeclarator": true,
        "ImportDeclaration": true,
        "Property": true
      }
    }],
    "no-new": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "semi": ["error", "never"],
    "vue/require-v-for-key": "off"
  },
}
module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
  ],
  env: {
    es6: true,
    browser: true,
  },
  plugins: [
    'react',
  ],
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    },
    'sourceType': 'module',
    'allowImportExportEverywhere': true
  },
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // react rules
    'react/js-one-expression-per-line': 0,
    // 'react/jsx-uses-react': 'error',
    // 'react/jsx-uses-vars': 'error',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    // import rules
    'import/no-unresolved': [0]
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    }
  }
};

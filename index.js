module.exports = {
  root:    true,
  extends: [
    'eslint:recommended',
    '@remix-run/eslint-config',
    'plugin:react/recommended'
  ],
  env: {
    es6:                         true,
    'react-native/react-native': true,
  },
  parserOptions: {
    ecmaVersion:  'latest',
    sourceType:   'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'simple-import-sort',
    'react',
    'react-native',
    'align-assignments',
    'only-error'
  ],
  rules: {
    'react-native/no-unused-styles':               2,
    'react-native/split-platform-components':      2,
    'react-native/no-inline-styles':               2,
    'react-native/no-color-literals':              2,
    'react-native/no-raw-text':                    2,
    'react-native/no-single-element-style-arrays': 2,

    'node/no-unsupported-features/es-syntax': 0,
    'key-spacing':                            ['error', {
      align: {
        on: 'value',
      },
    }],
    'no-console':                          0,
    'align-assignments/align-assignments': [2, { requiresOnly: false }],
    'no-multi-spaces':                     0,
    quotes:                                ['error', 'single', { allowTemplateLiterals: true }],
    indent:                                ['error', 2],
    'comma-dangle':                        0,
    'func-style':                          0,
    'jsdoc/require-param-description':     0,
    'jsdoc/require-returns-description':   0,
    'jsdoc/require-returns-type':          0,
    'jsdoc/implements-on-classes':         0,
    'jsdoc/require-jsdoc':                 0,
    'no-undefined':                        0,
    'simple-import-sort/imports':          'error',
    'simple-import-sort/exports':          'error',
    'import/first':                        'error',
    'import/newline-after-import':         'error',
    'import/no-duplicates':                'error'
  },
};

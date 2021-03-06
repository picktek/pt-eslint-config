module.exports = {
  root:    true,
  extends: [
    'eslint',
    'plugin:lodash/recommended',
    'plugin:unicorn/all',
    'eslint:recommended',
    'plugin:import/recommended',
    '@remix-run/eslint-config',
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
    'lodash',
    'align-assignments',
    'only-error',
  ],
  rules: {
    'node/no-unsupported-features/es-syntax': 0,
    'key-spacing':                            ['error', {
      align: {
        on: 'value',
      },
    }],
    'no-console':              0,
    'unicorn/template-indent': [
      'error', {
        indent: 2,
      },
    ],
    'align-assignments/align-assignments': [2, { requiresOnly: false }],
    'no-multi-spaces':                     0,
    quotes:                                ['error', 'single', { allowTemplateLiterals: true }],
    indent:                                ['error', 2],
    'comma-dangle':                        0,
    'unicorn/prevent-abbreviations':       0,
    'lodash/prefer-lodash-method':         0,
    'func-style':                          0,
    'lodash/prefer-constant':              0,
    'jsdoc/require-param-description':     0,
    'jsdoc/require-returns-description':   0,
    'jsdoc/require-returns-type':          0,
    'jsdoc/implements-on-classes':         0,
    'jsdoc/require-jsdoc':                 0,
    'unicorn/no-null':                     0,
    'no-undefined':                        0,
    'simple-import-sort/imports':          'error',
    'simple-import-sort/exports':          'error',
    'import/first':                        'error',
    'import/newline-after-import':         'error',
    'import/no-duplicates':                'error'
  },
};

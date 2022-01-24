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
    'sort-imports':                        ['error', {
      ignoreCase:            true,
      ignoreDeclarationSort: false,
      ignoreMemberSort:      false,
      memberSyntaxSortOrder: ['none', 'single', 'multiple', 'all'],
      allowSeparatedGroups:  true,
    }],
    quotes:                          ['error', 'single', { allowTemplateLiterals: true }],
    indent:                          ['error', 2],
    'comma-dangle':                  0,
    'unicorn/prevent-abbreviations': 0,
    'lodash/prefer-lodash-method':   0,
    'func-style':                    0,
    'lodash/prefer-constant':        0
  },
};

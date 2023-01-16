module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [{
    files: [
      'src/*'
    ]
  }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  plugins: [
    'react'
  ],
  ignorePatterns: [
    'src/index.tsx',
    'src/reportWebVitals.ts'
  ],
  rules: {
  }
}

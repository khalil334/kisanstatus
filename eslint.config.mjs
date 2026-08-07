// ESLint 9 flat config. `npm run lint` was broken before this file existed:
// eslint-config-next ships flat configs, but there was no eslint.config.* to load
// them, so ESLint exited with "couldn't find an eslint.config.(js|mjs|cjs) file".
import next from 'eslint-config-next';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

// Named before exporting so ESLint's own import/no-anonymous-default-export
// rule is satisfied (it was the last remaining lint warning).
const config = [
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'node_modules/**',
      'next-env.d.ts',
    ],
  },
  ...next,
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      // Hinglish-prose site: unescaped quotes/apostrophes in JSX text are
      // intentional copy, and React/Next escapes output anyway. The rule was
      // 948 errors of pure noise drowning real bugs.
      'react/no-unescaped-entities': 'off',
    },
  },
  {
    // Node scripts + config files are CommonJS by design.
    files: ['scripts/**/*.js', 'next.config.js', 'postcss.config.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
];

export default config;

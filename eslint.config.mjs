// ESLint 9 flat config. `npm run lint` was broken before this file existed:
// eslint-config-next ships flat configs, but there was no eslint.config.* to load
// them, so ESLint exited with "couldn't find an eslint.config.(js|mjs|cjs) file".
import next from 'eslint-config-next';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

export default [
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
];

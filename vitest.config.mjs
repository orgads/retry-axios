import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  test: {
    include: ['test/**/*.ts'],
    testTimeout: 60_000,
    coverage: {
      include: ['src/**/*.ts'],
      reporter: ['text-summary', 'lcov'],
      reportsDirectory: 'coverage'
    }
  },
  plugins: [
    swc.vite({
      module: { type: 'nodenext' }
    })
  ]
});

/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import createReactPlugin from '@vitejs/plugin-react';
import createReScriptPlugin from '@jihchi/vite-plugin-rescript';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createReactPlugin(), createReScriptPlugin()],
  server: {
    port: 80,
  },
  test: {
    include: ['tests/**/*_test.bs.js'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/Setup.bs.js',
  },
});

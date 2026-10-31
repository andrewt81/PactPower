import { defineConfig } from 'vite';
export default defineConfig({build:{chunkSizeWarningLimit:1500},server:{host:'0.0.0.0',allowedHosts:['terminal.local']}});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/numeral-converter",
  build: {
    outDir: './dist/numeral-converter',
  },
  plugins: [react()],
})

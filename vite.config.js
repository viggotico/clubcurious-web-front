import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'

// denne fil bruges til at tilpasse hvordan hjemmesiden bliver klargjort til lancering
// fx kan man benytte plugins og ændre i mange indstillinger

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    }
  }
})

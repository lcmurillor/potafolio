import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Habilita React y la actualización de componentes durante el desarrollo.
export default defineConfig({
  plugins: [react()],
})

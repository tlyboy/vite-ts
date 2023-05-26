import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      brand: {
        white: '#ecf0f1',
        black: '#121212',
        blue: '#3498db',
        primary: '#3498db',
      },
    },
  },
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
})

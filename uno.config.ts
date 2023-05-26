import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      brand: {
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

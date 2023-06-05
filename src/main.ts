import '@unocss/reset/tailwind.css'
import './assets/styles/main.css'
import 'virtual:uno.css'

const canvas = document.querySelector('canvas')!

canvas.width = innerWidth
canvas.height = innerHeight

const ctx = canvas.getContext('2d')!

ctx.translate(innerWidth / 2, innerHeight / 2)

const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 10)

gradient.addColorStop(0, '#fff')
gradient.addColorStop(1, '#000')

ctx.fillStyle = gradient
ctx.arc(0, 0, 10, 0, Math.PI * 2)
ctx.fill()

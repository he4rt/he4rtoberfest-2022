const greeting = [
    '💜 Hello, World! 💜',
    '💜 Olá, Mundo! 💜',
    '💜 Hola, Mundo! 💜'
]

const randomGreeting = greeting[Math.floor(Math.random() * greeting.length)]

console.log(randomGreeting);
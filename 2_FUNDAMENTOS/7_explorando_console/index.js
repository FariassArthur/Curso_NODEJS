//mais de um valor
const x = 10
const y = "20"
const z = ["pão", "carne"]

console.log(x,y,z)

//contagem de impressões
console.count(`O valor de x é:  ${x}, contagem`)

//variável entre string
console.log("%s", y)

//limpar o console
setTimeout(() => {
    console.clear()
}, 1000)
const a : string = 'Teste Typescript';

console.log(a.toUpperCase())

// strings

let message: string = 'Hello World!!!'
console.log(message)

//numbers

let numbers: number = 27
numbers = 27.5
console.log(`O valor de number em Typescript é: ${numbers}`)

//boolean

let possuiHobie: boolean = true
console.log(`O valor de possuiHobie é: ${possuiHobie}`)

let minhaIdade: number 
minhaIdade = 27
console.log(typeof minhaIdade)  

//arrays

let hobies: string[] = ['Estudar', 'Praticar o que eu estudei']
console.log(hobies[1])

//tuplas

let endereco: [string, number] = ['Av. Principal', 123]
console.log(`O endereço é: ${endereco}`)

//Enums

enum Cor {
  azul,
  vermelho,
  roxo
}

let myColor: Cor = Cor.azul
console.log(myColor)

//Any

let carro: any = 'BMW'
carro = {marca: 'BMW', ano: 2022}
console.log(carro)

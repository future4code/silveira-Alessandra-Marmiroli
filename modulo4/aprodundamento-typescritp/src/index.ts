const minhaString:string = "Alessandra"
console.log(minhaString)

// const minhaString2:string = 2
//console.log(minhaString2)

 //Ao atribuir o número dois o typescript anúncia um Erro! Deveria usar Number ao invés de string. 

 const meuNumero:number | string = 185
 const meuNumero2:number | string = "Alessandra"
 console.log(meuNumero, meuNumero2)
 //Quando adicionamos | (ou) significa que a váriavel aceita number ou string. 

 
 //Letra C 

 enum ClassColors {
    VIOLETA = "Violeta",
    ANIL = "Anil",
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja",
    VERMELHO = "Vermelho"
}

 type PersonPattern = {
    name: string,
    age: number,
    favouriteColour:string 
}

const people: PersonPattern [] = []


const person1: PersonPattern = {
    name: "Alessandra",
    age: 35,
    favouriteColour: ClassColors.VERMELHO
}
const person2: PersonPattern = {
    name: "Matteo",
    age: 7,
    favouriteColour: ClassColors.VIOLETA
}
const person3: PersonPattern = {
    name: "Heloísa",
    age: 9,
    favouriteColour: ClassColors.LARANJA
}
people.push(person1)
people.push(person2)
people.push(person3)
console.log(people)

//Letra D 


// const cor: ClassColors = ClassColors.VERDE

// type SelectColors = {
//     name: string,
//     favouriteColour: ClassColors
// }

// const NewSelectColors: SelectColors = {
//     name: "Alessandra",
//     favouriteColour: ClassColors.VERDE
// }




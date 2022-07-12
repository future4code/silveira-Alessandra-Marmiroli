import { performAttack, validadeCharacter } from "../src/Controller"
import Character from "../src/types/Character"

//EXERCÍCIO 02 -

describe ("Essas validações abaixo irão retornar true se for válida ou false caso não seja", ()=>{
    //Letra A
    test("Validando se a vida, defesa e força são maiores que 0", () =>{
        const character: Character = {
            name: "Alexis", 
            life: 500,
            strength: 420,
            defense: 800
        }
        //Aqui crio uma variável que recebe o type "Character" e suas característicasn preenchidas.
        
        const result = validadeCharacter(character)
        //Aqui crio uma variável que recebe a função e um parâmetro criado na linha 6 do código. 
        
        expect (result).toBe(true)
        //Aqui eu espero que o resultado seja true! 
      
    })
     //Letra B
    test ("Deve retornar false para nome vazio", () =>{
        const character: Character = {
            name: "", 
            life:100, 
            strength:250,
            defense: 180
        }
        const result = validadeCharacter(character)

        expect (result).toBe(false)
        //Aqui espero como name é passado com uma string vazia logo espero que o resultado seja false.  
    })
    // Letra C 
    test ("Deve retornar false no caso de força igual à zero", ()=>{
        const character: Character = {
            name: "Maverix", 
            life:100, 
            strength:0,
            defense: 180
        }
        const result = validadeCharacter(character)

        expect (result).toBe(false)
        //Aqui espero que o resultado seja falso se ca
    })
    // Letra D
    test ("Deve retornar false no caso de defesa for igual a 0", ()=>{
        const character: Character = {
            name: "Tempestade", 
            life:100, 
            strength:400,
            defense: 0
        }
        const result = validadeCharacter(character)

        expect (result).toBe(false)
        //Aqui espero que o resultado seja falso se ca
    })
    // Letra E 
    test ("Deve retornar false no caso de vida, força ou defesa receber um valor negativo", ()=>{
        const character: Character = {
            name: "Jean Grey", 
            life:-1, 
            strength:400,
            defense: 500
        }
        const result = validadeCharacter(character)

        expect (result).toBe(false)
    })
    //Letra F 
    test ("Se todas as informações forem válidas retorne true", ()=>{
        const character: Character = {
            name: "Logan", 
            life:500, 
            strength:800,
            defense: 500
        }
        const result = validadeCharacter(character)

        expect (result).toBe(true)
    })
    test ("Testando a força de ataque", ()=>{
        const attacker: Character = ({
            name: "Logan",
            life: 800, 
            strength: 800,
            defense: 500
        })
        const defender: Character = ({
            name: "Alexis", 
            life: 500,
            strength: 420,
            defense: 200
        })

        const validatorMock = jest.fn(()=>{
            return true
        })
        performAttack(attacker, defender, validatorMock)
 
        expect(defender.life).toBe(-100)
        expect(validatorMock).toBeCalled()
        expect(validatorMock).toBeCalledTimes(2)
        //Quantas vezes foi chamado. 
        
    })

})
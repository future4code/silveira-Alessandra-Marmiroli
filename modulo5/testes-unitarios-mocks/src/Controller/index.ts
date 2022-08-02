import Character from "../types/Character"

export const validadeCharacter = (input: Character):boolean => {
    if(
        !input.name || 
        input.life === undefined || 
        input.strength === undefined ||
        input.defense === undefined
    ){
        return false; 
    }
    if (input.life <=0 || input.strength <=0 || input.defense <=0){
        return false;
    }
    return true; 
};

// inversão de dependências para não usar a função fora.
// export const performAttack = (attacker: Character, defender: Character) => {
    
//     if (!validadeCharacter(attacker) || !validadeCharacter(defender)) {
//       throw new Error("Invalid character");
//     }
  
//     if (attacker.strength > defender.defense) {
//       defender.life -= attacker.strength - defender.defense;
//     }
// };

export const performAttack = (attacker: Character, defender: Character, validator: (input: Character) =>boolean) => {
    
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;

    //   defender.life = defender.life - attacker.strength - defender.defense;
    }
    // let valor = 0
    // valor += 50 
};




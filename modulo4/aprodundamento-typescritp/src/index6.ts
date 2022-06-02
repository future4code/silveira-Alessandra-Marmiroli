enum PeriodoSiglas {
    AC = "AC",	
    DC = "DC"
   }

function retornaIdade (ano:number, periodoSiglas:string) {
   if (periodoSiglas === "AC"){
       if(ano > 4000){
            return "Pré-história"
        }
        if (ano <= 4000){
            return "Idade antiga"
        }
   }
//Aqui faço a verificação de períodos
   if (periodoSiglas === "DC"){
       if (ano < 476){
            return "Idade antiga"
        }
       if (ano >= 476 && ano < 1453){
            return "Idade media"
        }
        if (ano >= 1453 && ano <1789){
            return "Idade Moderna"
        }
        if (ano >= 1789){
            return "Idade Comtemporânea"
        }

   }
}
console.log(retornaIdade(2022, "DC"))
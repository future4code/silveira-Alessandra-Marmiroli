type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

console.log(pokemon1, pokemon2, pokemon3)

//Todo o processo de criar o arquivo aparentemente ja ficou fixo, aqui no meu caso para transpilar estou utilizando um script NPM registrado dentro do arquivo package.jason lá estão todos os "scripts" caminhos para rodar no terminal. 

//RESPOSTA 4 - SEMPRE QUE GERO ESSE ARQUIVO COM TSC --INIT, EM SEGUIDA VOU DESCOMENTANDO ESSES ITENS: "compilerOptions": {
    //   "target": "es2017",            /* Specify ECMAScript target version */
    //   "module": "commonjs",       /* Specify module code generation */
    //   "sourceMap": true,          /* Generates corresponding '.map' file. */
    //   "outDir": "./build",        /* Redirect output structure to the directory. */
    //   "rootDir": "./src",         /* Specify the root directory of input files. */
    //   "removeComments": true,    /* Do not emit comments to output. */
    //   "noImplicitAny": true       /* Raise error on declarations with an implied 'any' type. */
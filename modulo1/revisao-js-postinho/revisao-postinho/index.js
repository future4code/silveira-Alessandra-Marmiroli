
/* COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));
         
//b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de igualdade ${a}==${b} é ${a == b}`

}
console.log (checarIgualdade(2, 2));

// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior (a, b){
    return `No comparador verifique qual número é maior ${a}>${b} é ${a>b}`
}
console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false

//a-) 1==='1'= false 
//b-) 1=='1'= true
//c-) 'a'==='b'= false
//d-) 'b'>'a'= true
//e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

function cadastro (nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade){
    let idadeDoUsuario = (2022-anoDeNascimento)
    let tamanhoSenha = senhaDoUsuario.length
    
    const usuario = [nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade]
    
    if ((idadeDoUsuario >= 18) && (tamanhoSenha >= 6) && (nacionalidade === "Brasileira")){
        return `Pode se cadastrar`
    }
    else{
        return `Não pode se cadastrar`
    }
    
//  Sua lógica aqui: Na função cadastro ela vai receber: nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade. A função vai verificar se este usuário é maior de 18 anos e se o tamanho da senha tem 6 digitos e se a nacionalidade dela é Brasileira. Se estas 3 informações for TRUE ele retorna PODE SE CADASTRAR em caso de FALSE Não pode se cadastrar.

}
console.log(cadastro("Alessandra", 1987, "******", "Brasileira"));

// Exercício 4-----------------------------------------------------------------------------------------------



function login (){ 
    let loginUsuario = prompt("Digite sua senha?")
    const login = "labenu"
    
    if (loginUsuario === login){
        return `Acesso liberado`
    }
    else{
        return `Senha Inválida`
    }
    //  Sua lógica aqui
}

//console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

function primeiraDose () {
    const nomeDoUsuario = prompt ("Qual seu nome?")
    const nomeDaVacina = prompt ("Qual o nome da vacina?")
    
    let tempo = 0
    let data = new Date
    
    
        switch (nomeDaVacina){
            case "coronavac":
                tempo = 28
                break   
            case "anistrazeca":
                tempo = 90
                break
            case "pfizer":
                tempo = 90 
                break
            default:
                return `Vacina Inválida`

        }
        data.setDate(data.getDate() + tempo)
        const dataFormatada = data.toLocaleDateString()

        return `Olá ${nomeDoUsuario}! A próxima dose da ${nomeDaVacina} é daqui a ${tempo} dias. Compareça no posto na data ${dataFormatada}.`
           

        /*if (nomeDaVacina === "coronavac"){
            return `Olá ${nomeDoUsuario}! A próxima dose da ${nomeDaVacina} é daqui a ${tempo + 28} dias. Compareça no posto na data ${data}.`
        }
        else if (nomeDaVacina === "astrazenica"){
            return `Olá ${nomeDoUsuario}! A próxima dose da ${nomeDaVacina} é daqui a ${tempo + 90} dias. Compareça no posto na data ${data}.`
        }else if (nomeDaVacina === "pfizer"){
            return `Olá ${nomeDoUsuario}! A próxima dose da ${nomeDaVacina} é daqui a ${tempo + 90} dias. Compareça no posto na data ${data}.`
        }else {return `Vacina não encontrada`}
        
            
    //  Sua lógica aqui


}
console.log(primeiraDose())




// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    for (var i = 0; i < usuarios.length; i++){
        if (usuarios[i].nome == "Barbara"){ 
            usuarios[i].imunizacao = "completa"
        }  
    }
    return usuarios      
}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    for (let i = 0; i < usuarios.length; i++){
        if (usuarios[i].imunizacao === "incompleta"){ 
            console.log (`Olá ${usuarios[i].nome}! Sua imunização está incompleta, por favor volte ao postinho para tomar a segunda dose.`)
        }  
    }
      
    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------*/

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidade: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = (usuarios) => {
    //let novaPessoa = new Object();
    let nome = prompt ("Qual seu nome?")
    let ano = prompt ("Qual ano?")
    let nacionalidade = prompt("Qual sua nacionalidade")
    let senha = prompt("Qual sua senha")
    //let vacina = prompt ("Qual vacina tomou?")
    //let imunizacao = prompt ("Vacinação completa ou incompleta?")
    let novaPessoa = {
        nome: nome,
        ano: ano,
        nacionalidade: nacionalidade,
        senha: senha 
    }
    usuarios.push(novaPessoa)
    return usuarios
} 
console.log(cadastroDesafio(usuarios));


const loginDesafio = () => {
    let senhaUsuario = prompt ("Digite sua senha")
    //let mensagem = ''
    //for (let i = 0; i < usuarios.length; i++){
        //if(usuarios[i].senha === senhaUsuario){
            //console.log("Acesso liberado")
        //}
    //}
    let senhaSalva = usuarios[usuarios.length -1].senha
    if (senhaSalva === senhaUsuario){
        console.log('Acesso liberado')
    }
    else{
        console.log('Senha Inválida')
    }
}

loginDesafio()

const primeiraDoseDesafio = () => {
    let vacina = prompt("Digite qual vacina tomou")
    let imunizacao = "incompleta"

    usuarios[usuarios.length -1] = {
        ...usuarios[usuarios.length -1], 
        vacina: vacina,
        imunizacao: imunizacao
    }
//  Sua lógica aqui
}
primeiraDoseDesafio()
//console.log(usuarios)

const segundaDoseDesafio = (nomeDoUsuario) => {
    for (let i = 0; i < usuarios.length; i++)
        if(nomeDoUsuario === usuarios[i].nome){
            usuarios[i].imunizacao = "completa"
        }
    return usuarios
}
console.log(segundaDoseDesafio("Carlos"));


const avisoAosAtrasadosDesafio = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    const vacinaIncompleta = usuarios.filter((pessoa)=>{
        return pessoa.imunizacao === "incompleta"
    })

    const mensagemIncompleta = vacinaIncompleta.map((pessoa)=>{
        return `Olá ${pessoa.nome}! Sua imunização está incompleta, por favor volte ao postinho para tomar a segunda dose.`
    })
    return mensagemIncompleta
}
console.log(avisoAosAtrasadosDesafio(usuarios)) 


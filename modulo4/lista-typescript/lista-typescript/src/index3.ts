enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type filme = {
    nomeDoFilme:string,
    anoDeLancamento:number,
    generoDoFilme:GENERO,
    pontuacao?:number | undefined
}
const filmeInforma = (nomeDoFilme:string, anoDeLancamento:number, generoDoFilme:GENERO, pontuacao?:number):filme =>{
    if (typeof pontuacao !== "undefined"){
    return {nomeDoFilme, anoDeLancamento, generoDoFilme, pontuacao}
    } 
    return{nomeDoFilme, anoDeLancamento, generoDoFilme}

}
console.log(filmeInforma("Duna", 2021, GENERO.ACAO, 74))
console.log(filmeInforma("Duna", 2021, GENERO.ACAO,))



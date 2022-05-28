type Usuario = {
    name:string,
    email:string,
    role:string,
}

const dadosLogin: Array<Usuario>=

 [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function dadosDoUsuario (dadosLogin:Array<Usuario>){
    return dadosLogin.filter((res) =>{
        return res.role === "admin"
    }).map((user)=>{
        return user.email
    })
}   

console.log(dadosDoUsuario(dadosLogin))
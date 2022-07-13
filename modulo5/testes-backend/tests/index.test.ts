import { getUserByIdMocks } from "./Users.Mock"

describe("Testando o id do User", ()=>{
    test("Testando ID", async() =>{
        try {
            await new getUserByIdMocks().getUserById("alessandra")//passa um id errado 
        } catch (error:any) {
            expect(error.statusCode).toBe(404)//espera receber um erro 404 
            expect(error.message).toEqual("User not found")//espera receber o mesmo erro da função mensagem
        }
    } )
})


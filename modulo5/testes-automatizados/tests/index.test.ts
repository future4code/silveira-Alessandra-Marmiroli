import { performPurchase, verifyAge } from "../src/Controller";
import User from "../src/Controller/types/User";
import UserNacionality from "../src/Controller/types/UserNacionality"

describe("Testando um usuário", () => {
    
    test("Saldo maior do que o valor de compra", () => {
        const user: User = {
            name: "Astrodev",
            balance: 100
        }
       
        const result = performPurchase(user, 40)

    
        expect(result).toEqual({
            name: "Astrodev",
            balance: 60
        });
    });
    
    test("Saldo igual ao valor de compra", () => {
        const user: User = {
            name: "Astrodev",
            balance: 100
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).toEqual({
            ...user,
            balance: 50
        })
    })
    
    test("Saldo menor do que o valor de compra", () => {
        const user: User = {
            name: "Astrodev",
            balance: 100
        }
    
        const result = performPurchase(user, 150)
        
        expect(result).not.toBeDefined()
        
    })

    test ("testando nacionalidade", () => {
        const user:UserNacionality[] = {
            name: "Alessandra"
            age: 35
            nacionality:NACIONALITY.BRAZILIAN
        }
        const casino:Casino = {
            name: "Alessandra",
            location: Location.BRAZIL
        }
        const result = verifyAge (casino, UserNacionality)
        expect (result).toEqual({
            brasilians:{
                alowed:[UserNacionality[0].name],
                unallowed:[]
            },
            americans:{
                allowed: [], 
                unallowed: []
            }
        })
    })
    
})

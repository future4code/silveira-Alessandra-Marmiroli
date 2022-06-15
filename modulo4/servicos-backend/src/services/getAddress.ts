import axios from "axios"
import { Address } from "../types/typeAddress"

export const getAddress = async (cep: string): Promise<Address | undefined> => {
    try {

        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)


        const address: Address = {
            logradouro: result.data.logradouro,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf, 
            CEP: result.data.cep, 
            numero: result.data.ibge, 
            complemento: result.data.complemento
        }
        return (address)

        console.log(result)
    } catch (error) {
        return undefined
    }
}
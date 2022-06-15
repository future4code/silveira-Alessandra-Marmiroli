import { Address } from "../types/typeAddress";
import { connection } from "./connection";

export default async function insertAddressAd(address:Address){
    const { logradouro, bairro, cidade, estado, CEP, numero, complemento} = address
    await connection("Address").insert({
        logradouro,
        bairro, 
        cidade, 
        estado,
        CEP,
        numero,
        complemento
    })
}
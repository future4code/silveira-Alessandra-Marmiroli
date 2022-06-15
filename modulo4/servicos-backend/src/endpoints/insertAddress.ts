import { getAddress } from "../services/getAddress";
import { Request, Response } from "express";
import insertAddressAd from "../data/insertAddressAd";

export const insertAddress = async (req: Request, res: Response) => {
    try {
        const endereco = req.params.cep

        const address = await getAddress(endereco)
        if (!address) {
            throw new Error("Cep inválido! Por gentileza informe o cep correto.")
        }
        await insertAddressAd(address)
        res.status(201).send("Endereço criado")
    } catch (error) {
        console.log(error)
        res.status(400).send("Tente outra vez!")
    }
}
import axios from "axios"
import { baseURL } from "./baseURL"

const getSubsArrow = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
};

const main = async () => {
    try {
      const subscribers = getSubsArrow()
      .then(console.log)
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()

// Resposta letra a) Funções assíncronas pode-se usar await e elas retornam uma Promises usando método then e método catch. Não espera a conclusão de outras operações para iniciar outra.
//Funções síncrona precisa ser enviada de forma sincronizada, mantendo uma ordem de envio de dados. 

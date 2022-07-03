import axios from "axios"
import { baseURL } from "./baseURL"


async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };


const main = async () => {
    try {
      const subscribers = getSubscribers()
      .then(console.log)
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()

// Resposta da letra a ) Para retornar os assinantes utilizei o método Get. 
// Resposta da letra b) Existe o tipo any que pode retornar qualqer coisa ou o tipo void que acaba retornando um tipo vazio. 
// Resposta da letra c) Respondida acima. 




import axios from "axios"
import { baseURL } from "./baseURL"

type user = {
	id: string;
	name: string;
	email: string;
}

const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };

//Resposta da letra a) Acredito que a Promise<user[]> é uma tipagem que esta no return sendo mapeada e devolvendo a mesma informação. Não vai ter erro. 

//Resposta da letra b) Tipamos a saída da função solicitando apenas o resultado que necessitamos mostrar, exemplo, se tipar como <string> retorna apenas a string. Se não passamos o tipo da função vem nossa busca e uma lista de informações não utilizáveis. 
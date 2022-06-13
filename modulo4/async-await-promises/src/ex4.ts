import axios from "axios"
import { baseURL } from "./baseURL"

const news = {
    title: "Faculdade de Direito e Engenharia cai 10% a inscrição de alunos",
    content: "Neste momento os alunos estão recorrendo à outras fontes de estudos que a conclusão termina em menos tempo.",
    date: Date.now()
}

async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${baseURL}/news`, {
      title: title,
      content: content, 
      date: date
    });
  }
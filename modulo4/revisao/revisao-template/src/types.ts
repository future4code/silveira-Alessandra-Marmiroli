export type movie = {
    id: number, 
    title: string, 
    year: number,
}

export enum GENDER {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
}

//Se caso queira que o ENUM retorne string é preciso especificar o campo como string! Caso apenas informe male, sem valor retornará um number. 

export type character = { 
    id: number, 
    name: string, 
    gender: GENDER,
    description?:string
}
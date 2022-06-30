export enum USER_ROLE {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL'
}

export interface authenticationData {
    id: string
    role: string
} 

export type recipes = {
    id: string
    titulo: string
    descricao: string
    modo_de_preparo: string
    data_de_preparacao: string
}
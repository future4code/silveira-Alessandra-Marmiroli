export enum USER_ROLE {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL'
}

export interface authenticationData {
    id: string
    role: string
} 
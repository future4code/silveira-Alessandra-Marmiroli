export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type user = {
    id: string
    email: string
    password: string
    role: USER_ROLES
}

export type AuthenticationData = {
    id: string
    role: string
}

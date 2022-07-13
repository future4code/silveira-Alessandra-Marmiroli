import { User, USER_ROLE } from "../src/model/User"


export const userMock = new User(
    "idUser1",
    "Alessandra",
    "alessandra@gmail.com",
    "123456",
    USER_ROLE.NORMAL
)

export const adminMock = new User(
    "idUser2",
    "Alessandra",
    "alessandra@gmail.com",
    "123456",
    USER_ROLE.ADMIN
)
//Crio dois usuários mockados para teste 
import { CustomError } from "../error/CustomError";

export enum USER_ROLE {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLE

    ) { }
    public getId(): string {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getEmail(): string {
        return this.email;
    }
    public getPassword(): string {
        return this.password;
    }
    public getRole():USER_ROLE {
        return this.role;
    }
   
} 

export const userRoler = (input:string):USER_ROLE =>{
        switch (input){
            case "NORMAL":
                return USER_ROLE.NORMAL;
            case "ADMIN":
                return USER_ROLE.ADMIN;
            default: 
            throw new CustomError(422, "Ivalid user role");
            
        }
}



import { USER_ROLE } from "../services/types";

export class User {
    constructor(
        private id: string,
        private email: string,
        private name: string,
        private password: string,
        private role: USER_ROLE
      
    ) {}
    public getId(): string {
        return this.id;
    }

    public getEmail(): string {
        return this.email;
    }

    public getName(): string {
        return this.name;
    }

    public getPassword(): string {
        return this.password;
    }
    public getRole(): string {
        return this.role;
    }

   
}
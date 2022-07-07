export enum POST_ROLE {
    NORMAL = 'NORMAL',
    EVENT = 'EVENT',
}

export default class Post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private creationDate: Date,
        private type: POST_ROLE
    ) { }

    public getId(): string {
        return this.id;
    }

    public getPhoto(): string {
        return this.photo;
    }

    public getDescription(): string {
        return this.description;
    }

    public getcreationDate(): Date {
        return this.creationDate;
    }
    public getType(): POST_ROLE {
        return this.type;
    }
}





export enum POST_ROLE {
    NORMAL = 'NORMAL',
    EVENT = 'EVENT',
}

export default class Post{
    constructor(
        private id:string, 
        private photo:string, 
        private description:string, 
        private creationDate:Date,
        private type: POST_ROLE
    ){}
}


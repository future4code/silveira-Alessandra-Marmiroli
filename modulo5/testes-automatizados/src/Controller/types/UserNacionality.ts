export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}

export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}

export default interface UserNacionality {
    name: string;
    age: number;
    nacionality: NACIONALITY;
}

export default interface Casino {
    name: string;
    location: LOCATION;
}

export interface ResultItem {
    allowed: string[];
    unallowed: string[];
}

export default interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}


import { Member } from "./member";

export interface Attributes {
    title: string;
    memberCards: { [key: string]: Member };
}
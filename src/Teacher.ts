import { User } from "./User";


enum SPECIALTY_TEACHER {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPEsCRIPT = "TYPESCRIPT",
    OOP = "OOP",
    BACKEND = "BACKEND",
}


export class Teacher implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birthDate: string,
        public specialties: SPECIALTY_TEACHER[]
    ){}
}
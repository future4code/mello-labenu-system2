import { User } from "./src/User";


enum SPECIALTY_TEACHER {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPEsCRIPT = "TYPESCRIPT",
    OOP = "OOP",
    BACKEND = "BACKEND",
}


export class Teachers implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birthDate: string,
        public specialties: SPECIALTY_TEACHER []
    ){}
}
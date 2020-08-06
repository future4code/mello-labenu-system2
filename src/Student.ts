import { User } from "./User"
import moment from "moment"
import { MemoryMeasurement } from "vm";

export class Student implements User {
    constructor (
        public id: string,
        public name: string,
        public email: string,
        public birthDate: string,
        public hobbies: string[],
    ) {} 

    public getAge(): number {
        const age: number = moment().diff(moment(this.birthDate, "DD/MM/YYYY"), "years")
        
        return age
    } 
}



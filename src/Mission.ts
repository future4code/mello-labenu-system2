import { Student } from "./Student"
import { Teacher} from "./Teacher"

export abstract class Mission { 
    private name: string = ""

    constructor (
        private id: string,
        private startDate: string,
        private endDate: string,
        private teachers: Teacher[],
        private students: Student[],
        private currentModule?: number
    ) {}

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getStartDate(): string {
        return this.startDate
    }

    public getEndDate(): string {
        return this.endDate
    }

    public getCurrentModule(): number | undefined {
        return this.currentModule
    }

    public addTeacher(teacher: Teacher): void {
        
        this.teachers.push(teacher)
    }

    public addStudent(student: Student): void {
        this.students.push(student)
    }

    public setName(name:string) {
        this.name = name
    }
}


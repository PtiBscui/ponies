import { Pony } from "./pony";

export class Course {
    id_course : number;
    date : Date;
    lieu : string;
    ponies : Array<Pony>;

    constructor(id_course : number, date : Date, lieu : string, ponies : Array<Pony>){
        this.id_course = id_course;
        this.date = date;
        this.lieu = lieu;
        this.ponies = ponies;
    }
}

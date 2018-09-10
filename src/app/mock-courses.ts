import { Course } from "./course";
import { Pony } from "./pony";
import { PoniesComponent } from "./ponies/ponies.component";
import { PONIES } from "./mock-ponies";

export const COURSES : Course[] = [
    { id_course : 1, date : new Date('01-01-2018'), lieu : 'Anima', ponies : [PONIES[0]] },
    { id_course : 2, date : new Date('02/01/2018'), lieu : 'Pôle', ponies : [PONIES[1], PONIES[3]] },
    { id_course : 3, date : new Date('03/01/2018'), lieu : 'Babel', ponies : [PONIES[2]] },
    { id_course : 4, date : new Date('04/01/2018'), lieu : 'Arc-en-Terre', ponies : [PONIES[4], PONIES[5], PONIES[0]] },
    { id_course : 5, date : new Date('05/01/2018'), lieu : 'Pharos', ponies : [PONIES[5]] },
    { id_course : 6, date : new Date('06/01/2018'), lieu : 'Héliopolis', ponies : [PONIES[0], PONIES[1], PONIES[2], PONIES[4]] },
    { id_course : 7, date : new Date('07/01/2018'), lieu : 'Zéphyr', ponies : [PONIES[1]] },
    { id_course : 8, date : new Date('08/01/2018'), lieu : 'Sidh', ponies : [PONIES[2], PONIES[3]] },
    { id_course : 9, date : new Date('09/01/2018'), lieu : 'L’étoile', ponies : [PONIES[3]] }
]
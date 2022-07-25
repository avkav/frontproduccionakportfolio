export class Habilidades{
    id?: number;
    name: string;
    institution: string;
    skillDate: string;

    constructor(name: string, institution: string, skillDate:string) {
        
        
        this.name= name;
        this.institution= institution;  
        this.skillDate= skillDate;  
    }

}
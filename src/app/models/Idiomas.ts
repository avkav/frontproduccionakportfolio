export class Idiomas{
    id?: number;
    name: string;
    idiomLevel: string;
    
    constructor(name:string, idiomLevel:string) {
       
        this.name= name;
        this.idiomLevel=idiomLevel;  
    }

}
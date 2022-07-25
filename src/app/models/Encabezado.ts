export class Encabezado{
    id?: any;
    name: string;
    backImage: string;
    profileImage: string; //image
    position: string;
    companyName: string; //company.name
    companyImg: string;
    companyUrl: string;
    schoolName: string;
    schoolImg: string;
    schoolUrl: string;
    ubication: string;


    constructor(name: string, backImage: string, profileImage: string, position: string, companyName: string, 
        companyImg: string, companyUrl: string, schoolName: string, schoolImg: string, schoolUrl: string, ubication:string) {


this.name = name;
this.backImage= backImage;
this.profileImage=profileImage; //image
this.position=position;
this.companyName=companyName;
this.companyImg=companyImg;
this.companyUrl=companyUrl;
this.schoolName=schoolName;
this.schoolImg=schoolImg;
this.schoolUrl=schoolUrl;
this.ubication=ubication;            
}


}
class Concerts{
    constructor(
       
    ){ var name:string="";
       var  place:string=""}
}

export class Instructor
{
    specialized:Array<string>=[];
    firstname:string="";
     lastname:string="";
     imageurl:string="";
}

export class InstructorDetails extends Instructor{
   
         education: string = "";
         from:string="";
        bio:string="";
       concerts:Array<Concerts>=[];
    
}
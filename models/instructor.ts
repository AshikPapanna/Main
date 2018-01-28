class Concerts{
    constructor(
       
    ){ var name:string="";
       var  place:string=""}
}


export class Instructorbrief
{
    _id:string="";
   
    firstname:string="";
     lastname:string="";
     imageurl:string="";
       specialized:"";
}
    export class Instructor{
        _id:"";
        instructorbriefs:Instructorbrief[]=[];
        }

export class InstructorDetails extends Instructorbrief{
   
         education: string = "";
         from:string="";
        bio:string="";
       concerts:Array<Concerts>=[];
    
}
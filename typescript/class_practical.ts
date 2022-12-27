//import { TransformStreamDefaultController } from "node:stream/web";

class Employee { 
    Employee_Name:string; 
    Employee_Code:Number; 
    Employee_DOJ:Date; 

    constructor(name:string,code:number,doj:Date) { 
        this.Employee_Name = name;
        this.Employee_Code = code;
        this.Employee_DOJ =doj;

     }  
    
    disp_Name():void { 
        console.log("Employee Name is  :   "+this.Employee_Name) 
     } 
    disp_Code():void { 
        console.log("Employee Code is  :   "+this.Employee_Code) 
     } 
    disp_Doj():void { 
        console.log("Employee Doj is  :   "+this.Employee_DOJ) 
     } 
  
}

class Admin extends Employee  
{  
        // methods and fields 
        Experience:string;
        PG_Degree:string;

        constructor(exp:string,degree:string,name:string,code:number,doj:Date) { 
            super(name,code,doj);
            this.Experience = exp;
            this.PG_Degree = degree;
         }

         x
        disp_Experience():void { 
            console.log("Admin Experience is  :   "+this.Experience) 
         } 
        disp_Degree():void { 
            console.log("Admin Degree is  :   "+this.PG_Degree) 
         } 
          
}  
class Academic extends Employee  
{  
        // methods and fields  
        School:string;
        Qualification : string;
        constructor(school:string,qualification:string,name:string,code:number,doj:Date) { 
            super(name,code,doj);
            this.School = school;
            this.Qualification = qualification;
           
    
         }

        disp_School():void { 
            console.log("School is  :   "+this.School) 
         } 
        disp_Qualification():void { 
            console.log("Qualification is  :   "+this.Qualification) 
         } 
        
      
}  
let date: Date = new Date();

var obj = new Employee("Avtar",233,date);
console.log(obj.Employee_Name);
console.log(obj.Employee_Code);
console.log(obj.Employee_DOJ);
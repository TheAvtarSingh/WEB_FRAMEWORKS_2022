class product {
   private pid:number;
   private pname:string;
   private price:number;
   private pdate:Date;

   public set setpid(value:number){
    this.pid = value;
   }

   public get getpid():number{
    return this.pid;
   }

public set setpname(value:string){
this.pname = value;
}

public get getpname():string{
    return this.pname;
}
public set setprice(value:number){
this.price = value;
}

public get getprice():number{
    return this.price;
}
public set setpdate(value:Date){
this.pdate = value;
}

public get getpdate():Date{
    return this.pdate;
}
}
function hello():void {
    console.log("Hello");
}

let productClass = new product();
 
productClass.setpid = 23;
console.log(productClass.getpid);

productClass.setpname = "Avtar Singh";
console.log(productClass.getpname);

productClass.setprice = 22000;
console.log(productClass.getprice);

// let date:Date = new Date(500000000000);
let date:Date = new Date();

productClass.setpdate = date;
console.log(productClass.getpdate);
hello();
let productArray : {pid,pname:string,price:number,pdate:Date}[] = [
    {
        "pid" : 101,"pname" : "Avtar","price":10000,"pdate" : date
    }
]



function putinArray(newpid,newpname:string,newprice:number,newpdate:Date){
  
// productArray.push({ newpid,newpname:String,newprice:Number,newpdate:Date})
/* a1.setpid = newpid;
a1.setpname = newpname;
a1.setprice = newpid;
a1.setpdate = newpdate; */


// arr.push(a1);
}
function printArray(){

// console.log(arr);
}



putinArray(102,"A",23000,date);
putinArray(103,"Av",23000,date);
putinArray(104,"Avt",23000,date);
putinArray(105,"Avta",23000,date);
putinArray(101,"Avtar",23000,date);
// printArray();

function popFromArray(){
    // arr.pop();
}

popFromArray();
printArray();
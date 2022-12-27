var product = /** @class */ (function () {
    function product() {
    }
    Object.defineProperty(product.prototype, "setpid", {
        set: function (value) {
            this.pid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(product.prototype, "getpid", {
        get: function () {
            return this.pid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(product.prototype, "setpname", {
        set: function (value) {
            this.pname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(product.prototype, "getpname", {
        get: function () {
            return this.pname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(product.prototype, "setprice", {
        set: function (value) {
            this.price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(product.prototype, "getprice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(product.prototype, "setpdate", {
        set: function (value) {
            this.pdate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(product.prototype, "getpdate", {
        get: function () {
            return this.pdate;
        },
        enumerable: false,
        configurable: true
    });
    return product;
}());
function hello() {
    console.log("Hello");
}
var productClass = new product();
productClass.setpid = 23;
console.log(productClass.getpid);
productClass.setpname = "Avtar Singh";
console.log(productClass.getpname);
productClass.setprice = 22000;
console.log(productClass.getprice);
// let date:Date = new Date(500000000000);
var date = new Date();
productClass.setpdate = date;
console.log(productClass.getpdate);
hello();
var productArray = [
    {
        "pid": 101, "pname": "Avtar", "price": 10000, "pdate": date
    }
];
function putinArray(newpid, newpname, newprice, newpdate) {
    // productArray.push({ newpid,newpname:String,newprice:Number,newpdate:Date})
    /* a1.setpid = newpid;
    a1.setpname = newpname;
    a1.setprice = newpid;
    a1.setpdate = newpdate; */
    // arr.push(a1);
}
function printArray() {
    // console.log(arr);
}
putinArray(102, "A", 23000, date);
putinArray(103, "Av", 23000, date);
putinArray(104, "Avt", 23000, date);
putinArray(105, "Avta", 23000, date);
putinArray(101, "Avtar", 23000, date);
// printArray();
function popFromArray() {
    // arr.pop();
}
popFromArray();
printArray();

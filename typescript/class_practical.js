"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(name, code, doj) {
        this.Employee_Name = name;
        this.Employee_Code = code;
        this.Employee_DOJ = doj;
    }
    Employee.prototype.disp_Name = function () {
        console.log("Employee Name is  :   " + this.Employee_Name);
    };
    Employee.prototype.disp_Code = function () {
        console.log("Employee Code is  :   " + this.Employee_Code);
    };
    Employee.prototype.disp_Doj = function () {
        console.log("Employee Doj is  :   " + this.Employee_DOJ);
    };
    return Employee;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(exp, degree, name, code, doj) {
        var _this = _super.call(this, name, code, doj) || this;
        _this.Experience = exp;
        _this.PG_Degree = degree;
        return _this;
    }
    Admin.prototype.disp_Experience = function () {
        console.log("Admin Experience is  :   " + this.Experience);
    };
    Admin.prototype.disp_Degree = function () {
        console.log("Admin Degree is  :   " + this.PG_Degree);
    };
    return Admin;
}(Employee));
var Academic = /** @class */ (function (_super) {
    __extends(Academic, _super);
    function Academic(school, qualification, name, code, doj) {
        var _this = _super.call(this, name, code, doj) || this;
        _this.School = school;
        _this.Qualification = qualification;
        return _this;
    }
    Academic.prototype.disp_School = function () {
        console.log("School is  :   " + this.School);
    };
    Academic.prototype.disp_Qualification = function () {
        console.log("Qualification is  :   " + this.Qualification);
    };
    return Academic;
}(Employee));
var date = new Date();
var obj = new Employee("Avtar", 233, date);
console.log(obj.Employee_Name);

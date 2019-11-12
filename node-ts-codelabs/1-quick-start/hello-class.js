var Division = /** @class */ (function () {
    function Division(id, name) {
        this.Id = id;
        this.Name = name;
    }
    return Division;
}());
var Employee = /** @class */ (function () {
    // Constructpr
    function Employee(fullName, employeeNo, divisionId, divisionName) {
        this.fullName = fullName;
        this.employeeNo = employeeNo;
        this.division = new Division(divisionId, divisionName);
    }
    // Method
    Employee.prototype.greet = function (name) {
        return "Hello " + name + ", i'm " + this.fullName;
    };
    Employee.prototype.greetPrint = function (name) {
        console.log("Hello " + name);
    };
    Employee.employeeType = "external";
    return Employee;
}());
console.log(Employee.employeeType);
var employeeObj = new Employee("Saggaf", "NBS001", "WEBDIV", "Web Tech Division");
console.log(employeeObj.greet("pak agung"));
employeeObj.greetPrint("pak sigit");

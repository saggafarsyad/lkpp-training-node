class Division {
  // Member
  Id: string
  Name: string

  constructor(id: string, name: string) {
    this.Id = id
    this.Name = name
  }
}

class Employee {
  // Member
  private fullName: string
  private employeeNo: string
  private division: Division

  static employeeType: string = "external"

  // Constructpr
  constructor(fullName: string, employeeNo: string, divisionId: string, divisionName: string) {
    this.fullName = fullName
    this.employeeNo = employeeNo
    this.division = new Division(divisionId, divisionName)
  }

  // Method
  greet(name: string): string {
    return `Hello ${name}, i'm ${this.fullName}`
  }

  greetPrint(name: string): void {
    console.log("Hello " + name)
  }
}

console.log(Employee.employeeType)

const employeeObj = new Employee("Saggaf", "NBS001", "WEBDIV", "Web Tech Division")

console.log(employeeObj.greet("pak agung"))

employeeObj.greetPrint("pak sigit")
let employee = {
  fullName: "Saggaf Arsyad",
  employeeNo: "NBS001",
  division: {
    id: "WEBDIV",
    name: "Web Tech Division"
  },
  educationHistory: [
    "SD", "SMP", "SMA", "S1"
  ],
  greet: function(targetName: string): string {
    return "Hello " + targetName + ", i'm " + this.fullName 
  },
  greetAnon: (targetName: string): string => {
    return `Hello ${targetName}, i'm anonymous`
  }
}

console.log(employee.greet("Pak dede"))
console.log(employee.greetAnon("Pak dede"))
console.log(employee.division.name)
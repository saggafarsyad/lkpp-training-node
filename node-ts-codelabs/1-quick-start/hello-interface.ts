interface Vehicle {
  moveForward(distance: number): string
}

let motorHonda: Vehicle = {
  moveForward: (distance: number): string => {
    return "jarak yang ditempuh: " + distance + " km"
  }
}

console.log(motorHonda.moveForward(10))

class Motor implements Vehicle {
  coveredDistance: number
  
  constructor() {
    this.coveredDistance = 0
  }

  moveForward(distance: number): string {
    this.coveredDistance += distance
    return `jarak yang telah ditempuh: ${this.coveredDistance}`
  }
}

let motorSuzuki = new Motor()
motorSuzuki.coveredDistance

let motorYamaha: Vehicle = new Motor()

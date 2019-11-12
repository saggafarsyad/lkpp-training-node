interface UserRepositoryContract {
  create(fullName: string): number
  getConn(): string
}

class UserRepositoryMySQL implements UserRepositoryContract {
  conn: string

  constructor() {
    this.conn = "mysql"
  }

  create(fullName: string): number {
    // TODO: Save to mysql
    return 1
  }

  getConn(): string {
    return this.conn
  }

  postgreFunc() {
    console.log("postgreFund")  
  }
}

class UserRepositoryPostgreSQL implements UserRepositoryContract {
  conn: string

  constructor() {
    this.conn = "postgre"
  }

  create(fullName: string): number {
    // TODO: Save to mysql
    return 1
  }

  getConn(): string {
    return this.conn
  }

  postgreFunc() {
    console.log("postgreFund")  
  }
}

function createUser(repository: UserRepositoryContract, fullName: string) {
  // Create user
  let id = repository.create(fullName)
  let conn = repository.getConn()

  console.log(`User with id ${id} is stored in ${conn}`)
}

let repoMySQL: UserRepositoryContract = new UserRepositoryMySQL()
let repoPostgre: UserRepositoryContract = new UserRepositoryPostgreSQL()

createUser(repoMySQL, "saggaf")
createUser(repoPostgre, "saggaf")
export const confKeys = {
  server: {
    portBind: 'server.portBind',
    baseUrl: 'server.baseUrl',
    clientSecret: 'server.clientSecret',
  },
  datasources: {
    todoDb: {
      host: 'datasources.todoDb.host',
      port: 'datasources.todoDb.port',
      user: 'datasources.todoDb.user',
      pass: 'datasources.todoDb.pass',
      dbName: 'datasources.todoDb.dbName',
    }
  }
}

export const ToDoStatus = {
  Do: 1,
  Doing: 2,
  Done: 3
}
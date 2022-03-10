const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: 'database-1.cgad3tayasjw.us-east-1.rds.amazonaws.com',
        user: 'admin',
        password: 'Seth1121a',
        database: 'test'
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;
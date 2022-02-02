const { Pool } = require("pg")

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "inf0",
  password: "root",
  port: 5432,
})

// const poolAdmin = new Pool({
//   user: "admin",
//   host: "localhost",
//   database: "inf0",
//   password: "admin",
//   port: 5432,
// })

// const poolEditor = new Pool({
//   user: "editor",
//   host: "localhost",
//   database: "inf0",
//   password: "editor",
//   port: 5432,
// })

// const poolUser = new Pool({
//   user: "user",
//   host: "localhost",
//   database: "inf0",
//   password: "user",
//   port: 5432,
// })
module.exports = pool
// module.exports = poolAdmin
// module.exports = poolEditor
// module.exports = poolUser

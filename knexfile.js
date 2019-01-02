module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/pocket_change_db_dev"
  },
  test: {
    client: "pg",
    connection: "postgres://localhost/pocket_change_db_test"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
}

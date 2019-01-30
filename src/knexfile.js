module.exports = {
  client: 'mysql',
  connection: {
    database: 'graphql',
    user:     'root',
    password: 'root'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
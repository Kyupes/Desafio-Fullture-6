const VendaRepositoryNoSQL = require('./vendaRepositoryNoSQL')
const VendaRepositoryInMemory = require('./vendaRepositoryInMemory')

function repositoryFactory () {
  const driver = process.env.DATABASE_CONNECTION_DRIVER
  // if (driver === 'inMemory') {
  //   return new VendaRepositoryInMemory()
  // } else {
  //   return new VendaRepositoryNoSQL()
  // }
  return driver === 'inMemory' ? new VendaRepositoryInMemory() : new VendaRepositoryNoSQL()
}

module.exports = { repositoryFactory }
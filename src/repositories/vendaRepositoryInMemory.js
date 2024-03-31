const { v4: uuidv4 } = require('uuid')
const { database } = require('../infra/database/dados')
class VendaRepositoryInMemory {
  findAll () {
    return database
  }
  create (transaction) {
    database.push({
      id: uuidv4(),
      ...transaction,
      criadoEm: new Date()
    })
  }

  update (id, teste) {
    console.log ('VendaRepositoryInMemory::update::id:', id)
    const index = database.findIndex(transaction =>(transaction.id === id))
    const transaction = database.find(transaction =>(transaction.id === id))
    console.log ('VendaRepositoryInMemory::update::index:', index)
    database[index] = {
      ...transaction,
      teste
    }
  }
  delete (id) {
    const index = database.findIndex(transaction => transaction.id === id)
    database.splice(index, 1)
  }
}

module.exports = VendaRepositoryInMemory
const { repositoryFactory } = require('../repositories/factory')

async function execute () {
  const repository = repositoryFactory()
  const vendas = await repository.findAll()
  return vendas
}

module.exports = { execute }
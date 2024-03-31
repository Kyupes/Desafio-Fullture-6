const { repositoryFactory } = require('../repositories/factory')

async function execute (id, title, type, category, amount) {
  const repository = repositoryFactory()

  try {
    await repository.update(id, title, type, category, amount)
    return {
      success: true
    }
  } catch (error) {
    console.log('ERROR::TransactionUpdateUseCase::execute::error', error)
    return {
      success: false,
      httpCode: 500,
      errorMessage: 'Ocorreu um erro ao tentar atualizar a transação, tente novamente mais tarde'
    }
  }
}
module.exports = { execute }
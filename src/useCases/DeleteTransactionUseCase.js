const { repositoryFactory } = require('../repositories/factory')

async function execute (id) {
  const repository = repositoryFactory()
  try {
    await repository.delete(id)
    return {
      success: true
    }
  } catch (error) {
    console.log('ERROR::DeleteTransactionUseCase::execute::error', error)
    return {
      success: false,
      httpCode: 500,
      errorMessage: 'Ocorreu um erro ao tentar deletar a nova transação, tente novamente mais tarde'
    }
  }  
}

module.exports = { execute }
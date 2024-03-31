const { repositoryFactory } = require('../repositories/factory')

async function execute (title, type, category, amount) {
  const repository = repositoryFactory()
  const transaction = {
    title,
    type,
    category,
    amount,
  }
  console.log('NewTransactionUseCase::execute::transaction', transaction)
  try {
    await repository.create(transaction)
    return {
      success: true
    }
  } catch (error) {
    console.log('ERROR::NewTransactionUseCase::execute::error', error)
    return {
      success: false,
      httpCode: 500,
      errorMessage: 'Ocorreu um erro ao tentar criar a nova venda, tente novamente mais tarde'
    }
  }  
}

module.exports = { execute }
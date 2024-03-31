const NewTransactionUseCase = require('../useCases/NewTransactionUseCase') 
async function NewTransactionController (request, response) {
  const transaction = request.body
  const { title, type, category, amount } = transaction
  if (!title || !type || !category || !amount) {
    return response.status(400).json({
      message: 'As informações de operador são obrigatórias: title, type, category, amount'
    })
  }
  const { success, httpCode, errorMessage } = await NewTransactionUseCase.execute(title, type, category, amount)
  if (!success) {
    return response.status(httpCode).json({
      message: errorMessage
    })
  }
  return response.json()
}

module.exports = NewTransactionController
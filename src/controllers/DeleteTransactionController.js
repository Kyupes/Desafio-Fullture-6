const DeleteTransactionUseCase = require('../useCases/DeleteTransactionUseCase')

async function DeleteTransactionController (request, response) {
    const { id } = request.params
    if (!id){
        return response.status(400).json({
            message: 'Não é permitido remover uma transação sem o ID'
        })
    }
    const { success, httpCode, errorMessage } = await DeleteTransactionUseCase.execute(id)
    if (!success) {
      return response.status(httpCode).json({
        message: errorMessage
      })
    }
    return response.json()
}

module.exports = DeleteTransactionController

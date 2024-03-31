const TransactionUpdateUseCase = require('../useCases/TransactionUpdateUseCase')

async function TransactionUpdateController (request, response) {
    const { id } = request.params
    const { title, type, category, amount } = request.body
    if (!id){
        return response.status(400).json({
            message: 'O ID é obrigatório'
        })
    }
    const { success, httpCode, errorMessage } = await TransactionUpdateUseCase.execute(id, { title, type, category, amount })
    if (!success) {
        return response.status(httpCode).json({
            message: errorMessage
        })
    }
    return response.json()
}


module.exports = TransactionUpdateController

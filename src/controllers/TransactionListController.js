const TransactionListUseCase = require('../useCases/TransactionListUseCase')

async function TransactionListController (request, response) {
  const vendas = await TransactionListUseCase.execute()
  return response.json(vendas)
}

module.exports = TransactionListController

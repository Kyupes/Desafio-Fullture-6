const { Router } = require('express')
const TransactionListController = require('./controllers/TransactionListController')
const TransactionUpdateController = require('./controllers/TransactionUpdateController')
const DeleteTransactionController = require('./controllers/DeleteTransactionController')
const NewTransactionController = require('./controllers/NewTransactionController')
const routes = Router()

routes.get('/transactions', TransactionListController)
routes.post('/transactions', NewTransactionController)
routes.put('/transactions/:id', TransactionUpdateController)
routes.delete('/transactions/:id', DeleteTransactionController)

module.exports = routes
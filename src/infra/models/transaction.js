const { Schema, model } = require('mongoose')
const transactionSchema = new Schema({
  title: String,
  type: String,
  category: String,
  amount: Number,
}, { timestamps: true })
module.exports = model('Transaction', transactionSchema)
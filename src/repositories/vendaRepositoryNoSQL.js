const { startConnection, closeConnection } = require('../infra/database/mongodb');
const transactionModel = require('../infra/models/transaction');

class VendaRepositoryNoSQL {
  async findAll () {
    try {
      await startConnection();
      const transactions = await transactionModel.find();
      console.log('VendaRepositoryNoSQL::findAll::transactions:', transactions);
      await closeConnection();
      return transactions;
    } catch (error) {
      console.log('ERROR::VendaRepositoryNoSQL::findAll::error', error);
      throw new Error('Erro ao tentar consultar vendas');
    }
    
  }
  async create (transaction) {
    try {
      await startConnection();
      console.log('VendaRepositoryNoSQL::create::venda:', transaction);
      await transactionModel.create(transaction);
      await closeConnection();
    } catch (error) {
      console.log('ERROR::VendaRepositoryNoSQL::create::error', error);
      throw new Error('Erro ao tentar criar nova venda');
    }
  }
  async update(_id, transaction) {
    try {
        await startConnection();
        console.log('VendaRepositoryNoSQL::update::_id:', _id);
        await transactionModel.updateOne({ _id }, transaction);
        await closeConnection();
    } catch (error) {
        console.log('ERROR::VendaRepositoryNoSQL::update::error', error);
        throw new Error('Erro ao tentar atualizar a transação');
    }
}
  async delete (_id) {
    try {
      await startConnection()
      console.log('VendaRepositoryNoSQL::delete::_id:', _id)
      await transactionModel.deleteOne({ _id })
      await closeConnection()
    } catch (error) {
      console.log('ERROR::VendaRepositoryNoSQL::delete::error', error)
      throw new Error('Erro ao tentar deletar a transação')
    }
  }
}

module.exports = VendaRepositoryNoSQL
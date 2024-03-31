const mongoose = require('mongoose')

async function startConnection() {
  try {
    await mongoose.connect('mongodb://localhost:27017/masterclass')
    console.log('MONGODB::startConnection::Conexão com o mongo iniciada')
  } catch (error) {
    console.log('ERROR::MONGODB::startConnection::error', error)
    throw new Error('Erro ao tentar se conectar com o servidor')
  }
}

async function closeConnection() {
  try {
    await mongoose.disconnect()
    console.log('MONGODB::closeConnection::Conexão com o mongo encerrada')
  } catch (error) {
    console.log('ERROR::MONGODB::startConnection::error', error)
    throw new Error('Erro ao tentar se desconectar com o servidor')
  }
}

module.exports = {
  startConnection,
  closeConnection
}
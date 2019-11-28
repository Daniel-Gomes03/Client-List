const mongoose = require('mongoose')

const ClientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    cpf: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    },
    neighborhood: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      require: false
    }
  },
  {
    timestamps: true
  }
)

const Client = mongoose.model('Client', ClientSchema)

module.exports = Client

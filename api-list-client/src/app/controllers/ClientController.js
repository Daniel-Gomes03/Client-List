const Client = require('../models/Client')

class ClientController {
  async index (req, res) {
    const client = await Client.find()

    return res.json(client)
  }

  async show (req, res) {
    const { id } = req.params

    const client = await Client.findById(id)

    return res.json(client)
  }

  async store (req, res) {
    const client = await Client.create(req.body)

    return res.json(client)
  }

  async update (req, res) {
    const { id } = req.params
    const client = await Client.findByIdAndUpdate(id, req.body, {
      new: true
    })

    return res.json(client)
  }

  async delete (req, res) {
    const { id } = req.params
    await Client.findByIdAndDelete(id)

    return res.send()
  }
}

module.exports = new ClientController()

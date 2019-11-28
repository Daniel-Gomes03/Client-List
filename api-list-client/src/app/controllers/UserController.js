const User = require('../models/User')
const cpfValidator = require('../utils/cpfValidator')

class UserController {
  async show (req, res) {
    console.log(req.userId)

    const me = await User.findById(req.userId)

    return res.json(me)
  }

  async store (req, res) {
    const { cpf, email } = req.body

    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'User already exists' })
    }

    if (!cpfValidator(cpf)) {
      return res.status(400).json({ error: 'invalid cpf' })
    }

    const user = await User.create(req.body)

    return res.json({
      user: {
        name: user.name,
        email: user.email,
        role: user.role
      },
      token: User.generateToken(user)
    })
  }
}

module.exports = new UserController()

const express = require('express')
const router = express.Router()

// Load User Functions
const { registerUser, loginUser } = require('../components/user')

// Register
router.post('/register', async (req, res) => {
  const { name, email, password, password2 } = req.body
  const register = registerUser(name, email, password, password2)
  res.send(register)
})

// Login
router.post('/login', async (req, res) => {
  const { name, email, password } = req.body
  const login = loginUser(name, email, password)
  res.send(login)
})

module.exports = router

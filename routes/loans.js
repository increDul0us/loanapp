const express = require('express')
const router = express.Router()

const { EnsureAuthenticated } = require('../components/user')
const { getLoans, loanApply } = require('../components/loan')

router.get('/', EnsureAuthenticated, async (req, res) => {
  res.send(getLoans())
})

router.post('/apply', EnsureAuthenticated, async (req, res) => {
  const { name, description, rate, amount, tenure } = req.body
  let apply = loanApply(name, description, rate, amount, tenure)
  res.send(apply)
})

module.exports = router

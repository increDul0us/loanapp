const moment = require('moment')

var loans = [
  { id: 1,
    name: 'Ren Money',
    description: 'Salary earners discounted loans',
    rate: '3%',
    amount: 50000,
    tenure: `${moment.duration(18, 'M').asYears()} years`
  },
  { id: 2,
    name: 'KiaKia',
    description: 'Easy Small loan',
    rate: '5%',
    amount: 5000,
    tenure: `${moment.duration(3, 'M').asMonths()} months`
  }
]

module.exports = {
  getLoans: function () {
    return loans
  },
  loanApply: function (name, description, rate, amount, tenure) {
    let errors = []
    let tenureVal = null
    let now = new Date().getTime()
    let endTime = (tenure * 2628002800) + now
    if (!name || !description || !rate || !amount || !tenure) {
      errors.push({ msg: 'Please enter all fields' })
    }
    if (loans[loans.length - 1].endTime) {
      if ((now - loans[loans.length - 1].endTime) < 0) {
        errors.push({ msg: 'You have a running loan' })
      }
    }
    if (errors.length > 0) {
      return (errors)
    } else {
      if (tenure < 12) {
        tenureVal = `${moment.duration(tenure, 'M').asMonths()} months`
      } else tenureVal = `${moment.duration(tenure, 'M').asYears()} years`
      loans.push({ 'id': (loans[loans.length - 1].id) + 1, name, description, rate, amount, 'tenure': tenureVal, 'endTime': endTime })
      let appliedLoan = { 'id': (loans[loans.length - 1].id) + 1, name, description, rate, amount, 'tenure': tenureVal }
      return (appliedLoan)
    }
  }
}

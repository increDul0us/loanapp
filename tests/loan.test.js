const { getLoans, loanApply } = require('../components/loan')
const moment = require('moment')

describe('Get Available Loans', () => {
  it('should display all available loans', () => {
    const result = getLoans()
    expect(result).toContainEqual({
      id: 1,
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
    })
  })
})
describe('Apply for a Loan', () => {
  it('should apply for a loan', () => {
    const result = loanApply('name', 'description', '2%', 20000, 24)
    expect(result).toMatchObject({ name: 'name', description: 'description', rate: '2%', amount: 20000 })
  })
})

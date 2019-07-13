const users = []

module.exports = {
  registerUser: function (name, email, password, password2) {
    let errors = []
    let aUser = users.find((user) => user.email === email)
    if (!name || !email || !password || !password2) {
      errors.push({ msg: 'Please enter all fields' })
    } else
    if (password !== password2) {
      errors.push({ msg: 'Passwords do not match' })
    } else
    if (password.length < 3) {
      errors.push({ msg: 'Password must be at least 3 characters' })
    } else
    if (aUser) {
      errors.push({ msg: 'User exist' })
    }
    if (errors.length > 0) {
      return (errors)
    } else {
      let profile = { name, email }
      users.push({ name, email, password, isLoggedIn: false })
      return (profile)
    }
  },
  loginUser: function (name, email, password) {
    let errors = []

    if (!name || !email || !password) {
      errors.push({ msg: 'Please enter all fields' })
    }
    let aUser = users.find((user) => user.email === email)
    if (aUser) {
      if (aUser.password === password) {
        aUser.isLoggedIn = true
        let profile = { name, email }
        return (profile)
      } else {
        errors.push({ msg: 'Incorrect Details' })
      }
    } else {
      errors.push({ msg: 'Incorrect Details' })
    }
    if (errors.length > 0) {
      return (errors)
    }
  },
  EnsureAuthenticated: function (req, res, next) {
    let isLoggedIn = users.find((user) => user.isLoggedIn === true)
    if (isLoggedIn) {
      return next()
    }
    res.send('Kindly Login')
  }
}
exports.users = users

const { registerUser, loginUser } = require('../components/user')

describe('User Registration', () => {
  it('should register a user', () => {
    const result = registerUser('test', 'test@gmail.com', '1234', '1234')
    expect(result).toMatchObject({ name: 'test', email: 'test@gmail.com' })
  })
  it('should require all fields', () => {
    const result = registerUser('test', 'test@gmail.com', '1234')
    expect(result).toContainEqual({ msg: 'Please enter all fields' })
  })
  it('should require passwords to match', () => {
    const result = registerUser('test', 'test@gmail.com', '1234', '1235')
    expect(result).toContainEqual({ msg: 'Passwords do not match' })
  })
  it('should require passwords to be at least 3 characters', () => {
    const result = registerUser('test', 'test@gmail.com', '12', '12')
    expect(result).toContainEqual({ msg: 'Password must be at least 3 characters' })
  })
  it('should require a new user', () => {
    const result = registerUser('test', 'test@gmail.com', '1234', '1234')
    expect(result).toContainEqual({ msg: 'User exist' })
  })
})
describe('User Login', () => {
  it('should register a user', () => {
    const result = loginUser('test', 'test@gmail.com', '1234')
    expect(result).toMatchObject({ name: 'test', email: 'test@gmail.com' })
  })
  it('should require all fields', () => {
    const result = loginUser('test@gmail.com', '1234')
    expect(result).toContainEqual({ msg: 'Please enter all fields' })
  })
  it('should request correct details', () => {
    const result = loginUser('test', 't@gmail.com', '1234')
    expect(result).toContainEqual({ msg: 'Incorrect Details' })
  })
  it('should request correct details', () => {
    const result = loginUser('test', 'test@gmail.com', '12314')
    expect(result).toContainEqual({ msg: 'Incorrect Details' })
  })
})

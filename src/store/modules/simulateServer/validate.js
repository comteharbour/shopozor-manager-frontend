import * as storage from './storage'
import * as helpers from './helpers'

export const userDoesExist = ({ email, userId }) => {
  const users = storage.read().users
  // for (let userIndex in users) {
  //   if (email === users[userIndex].email || userId === users[userIndex].userId) {
  //     return true
  //   }
  // }
  // return false
  return users.filter(user => user.email === email || user.userId === userId).length === 1
}

export const passwordIsValid = ({ email, userId, password }) => {
  const user = helpers.getUser({ email, userId })
  if ((email === user.email || userId === user.userId) && password === user.password) {
    return true
  }
  return false
}

export const tokenIsValid = ({ userId, token }) => {
  const user = helpers.getUser({ userId })
  if (user !== undefined && userId === user.userId && token === user.token) {
    return true
  }
  return false
}

export const userHasAuthorization = ({ userId, email, authorization }) => {
  const user = helpers.getUser({ userId, email })
  if (userId === user.userId || email === user.email) {
    return true
  }
  return false
}

export const productIsValid = ({ product }) => {
  const hasName = product.name !== undefined
  if (hasName) return true
  else return false
}

import * as storage from './storage'
import * as helpers from './helpers'

export const userDoesExist = ({ email, id }) => {
  const users = storage.read().users
  for (let userIndex in users) {
    if (email === users[userIndex].email || id === users[userIndex].id) {
      return true
    }
  }
  return false
}

export const passwordIsValid = ({ email, id, password }) => {
  const user = helpers.getUser({ email, id })
  if ((email === user.email || id === user.id) && password === user.password) {
    return true
  }
  return false
}

export const tokenIsValid = ({ id, token }) => {
  const user = helpers.getUser({ id })
  if (id === user.id && token === user.token) {
    return true
  }
  return false
}

export const userHasAuthorization = ({ id, email, authorization }) => {
  const user = helpers.getUser({ id, email })
  if (id === user.id || email === user.email) {
    return true
  }
  return false
}

export const productIsValid = ({ product }) => {
  const hasName = product.name !== undefined
  if (hasName) return true
  else return false
}

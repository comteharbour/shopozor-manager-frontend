import types from '../../../../types'
import * as storage from '../storage'
import * as helpers from '../helpers'

// Problème: toutes les données du serveur sont copiées dans une constante à chaque accès

export const createUser = ({ email, password }) => {
  const newUser = {
    email: email,
    userId: email,
    password: password,
    authorization: [types.auth.CONSUMER]
  }
  const oldServerData = storage.read()
  const newUsers = [...oldServerData.users, newUser]
  const newServerData = { ...oldServerData, users: newUsers }
  storage.write(newServerData)
}

export const getToken = ({ email }) => {
  const token = generateToken({ email })
  helpers.updateUser({ email, newProps: { token } })
  return token
}

const generateToken = ({ email }) => {
  const userId = getId({ email })
  return `${userId}'s token was created on ${Date()}`
}

export const removeToken = ({ email, userId }) => {
  helpers.updateUser({ email, userId, token: undefined })
}

export const getId = ({ email }) => {
  const user = helpers.getUser({ email })
  return user.userId
}

export const changeUserEmail = ({ userId, oldEmail, newEmail }) => {
  helpers.updateUser({ userId, email: oldEmail, newProps: { email: newEmail } })
}

export const changeUserPassword = ({ email, userId, newPassword }) => {
  helpers.updateUser({ email, userId, newProps: { password: newPassword } })
}

export const getAuthorization = ({ email, userId }) =>
  helpers.getUser({ email, userId }).authorization

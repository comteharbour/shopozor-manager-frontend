import types from '../../../types'
import * as storage from '../storage'
import * as helpers from '../helpers'

// Problème: toutes les données du serveur sont copiées dans une constante à chaque accès

export const createUser = ({ email, password }) => {
  const newUser = {
    email: email,
    id: email,
    password: password,
    authorization: types.auth.CONSUMER
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
  const id = getId({ email })
  return `${id}'s token was created on ${Date()}`
}

export const removeToken = ({ email, id }) => {
  helpers.updateUser({email, id, token: undefined})
}

export const getId = ({ email }) => {
  const user = helpers.getUser({ email })
  return user.id
}

export const changeUserEmail = ({ id, oldEmail, newEmail }) => {
  helpers.updateUser({ id, email: oldEmail, newProps: { email: newEmail } })
}

export const changeUserPassword = ({ email, id, newPassword }) => {
  helpers.updateUser({ email, id, newProps: { password: newPassword } })
}

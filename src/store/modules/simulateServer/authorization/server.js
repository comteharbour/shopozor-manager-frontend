import types from '../../../types'

// Problème: les données du serveur sont copiées dans une constante à chaque accès
export const read = () => JSON.parse(localStorage.getItem('fake_server'))
export const write = newServerData =>
  localStorage.setItem('fake_server', JSON.stringify(newServerData))

export const userDoesExist = email => {
  const users = read().users
  for (let userIndex in users) {
    if (email === users[userIndex].email) {
      return true
    }
  }
  return false
}

export const createUser = (email, password) => {
  const newUser = {
    email: email,
    password: password,
    authorization: types.auth.CONSUMER
  }
  const oldServerData = read()
  const newUsers = [...oldServerData.users, newUser]
  const newServerData = { ...oldServerData, users: newUsers }
  write(newServerData)
}

export const emailAndPasswordMatch = (email, password) => {
  const users = read().users
  for (let userIndex in users) {
    if (
      email === users[userIndex].email &&
      password === users[userIndex].password
    ) {
      return true
    }
  }
  return false
}

export const getUserIndex = email => {
  const users = read().users
  for (let userIndex in users) {
    if (email === users[userIndex].email) {
      return userIndex
    }
  }
  console.error(`Can't find ${email} on server.`)
}

export const updateUserProfile = (email, newProfile) => {
  const index = getUserIndex(email)

  const oldServerData = read()
  const newUser = { ...oldServerData.users[index], profile: newProfile }
  const newUsers = oldServerData.users
  newUsers.splice(index, 1, newUser)
  const newServerData = { ...oldServerData, users: newUsers }

  write(newServerData)
}

export const changeUserEmail = (oldEmail, newEmail) => {
  const index = getUserIndex(oldEmail)

  const oldServerData = read()
  const newUser = { ...oldServerData.users[index], email: newEmail }
  const newUsers = [...oldServerData.users, newUser]
  const newServerData = { ...oldServerData, users: newUsers }

  write(newServerData)
}

export const changeUserPassword = (email, newPassword) => {
  const index = getUserIndex(email)

  const oldServerData = read()
  const newUser = { ...oldServerData.users[index], password: newPassword }
  const newUsers = [...oldServerData.users, newUser]
  const newServerData = { ...oldServerData, users: newUsers }

  write(newServerData)
}

import * as server from './server'

export const createUser = ({ email, password }) => {
  const delayInMs = 1000
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (server.userDoesExist(email)) {
        reject(new Error('user already exists'))
      } else {
        server.createUser(email, password)
        resolve(`${email} is now a recognized user`)
      }
    }, delayInMs)
  })
}

export const updateUserProfile = ({ email, password, newProfile }) => {
  const delayInMs = 1000
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (server.emailAndPasswordMatch(email, password)) {
        server.updateUserProfile(email, newProfile)
        resolve('user successfully updated')
      } else {
        reject(new Error('email and password do not match'))
      }
    }, delayInMs)
  })
}

export const changeUserEmail = ({ oldEmail, newEmail, password }) => {
  const delayInMs = 1000
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (server.emailAndPasswordMatch(oldEmail, password)) {
        server.changeUserEmail(oldEmail, newEmail)
        resolve('user email successfully changed')
      } else {
        reject(new Error('email and password do not match'))
      }
    }, delayInMs)
  })
}

export const changeUserPassword = ({ email, newPassword, oldPassword }) => {
  const delayInMs = 1000
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (server.emailAndPasswordMatch(email, oldPassword)) {
        server.changeUserPassword(email, newPassword)
        resolve('user password successfully changed')
      } else {
        reject(new Error('email and password do not match'))
      }
    }, delayInMs)
  })
}

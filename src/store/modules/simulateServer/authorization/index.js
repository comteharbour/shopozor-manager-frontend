import * as server from './server'
import * as validate from '../validate'

const delayInMs = 1000

export const createUser = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!validate.userDoesExist({ email })) {
        server.createUser({ email, password })
        resolve(`[CREATE_USER] ${email} is now a recognized user`)
      } else {
        reject(new Error('[CREATE_USER] user already exists'))
      }
    }, delayInMs)
  })
}

export const login = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (validate.passwordIsValid({ email, password })) {
        resolve({
          message: `[LOGIN] ${email} successfully logged in`,
          token: server.getToken({ email }),
          id: server.getId({ email })
        })
      } else {
        reject(new Error('[LOGIN] email and password do not match'))
      }
    }, delayInMs)
  })
}

export const logout = ({ id, token }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (validate.tokenIsValid({ id, token })) {
        server.removeToken({ id })
        resolve(
          `[LOGOUT] User ${id} has been logged off. Token ${token} isn't valid any more.`
        )
      } else {
        reject(new Error('[LOGOUT] token is not valid'))
      }
    }, delayInMs)
  })
}

export const changeUserEmail = ({ id, token, newEmail, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        validate.tokenIsValid({ id, token }) &&
        validate.passwordIsValid({ id, password })
      ) {
        server.changeUserEmail({ id, newEmail })
        resolve('[CHANGE_USER_EMAIL] user email successfully changed')
      } else {
        reject(new Error('[CHANGE_USER_EMAIL] email and password do not match'))
      }
    }, delayInMs)
  })
}

export const changeUserPassword = ({ id, token, newPassword, oldPassword }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        validate.tokenIsValid({ id, token }) &&
        validate.passwordIsValid({ id, password: oldPassword })
      ) {
        server.changeUserPassword({ id, newPassword })
        resolve('[CHANGE_USER_PASSWORD] user password successfully changed')
      } else {
        reject(new Error('[CHANGE_USER_PASSWORD] email and password do not match'))
      }
    }, delayInMs)
  })
}

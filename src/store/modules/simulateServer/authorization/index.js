import * as server from './server'
import * as validate from '../validate'
import * as helpers from '../helpers'
import types from '../../../../types'

const delayInMs = 1000

export const signup = ({ email, password }) => {
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
          userId: server.getId({ email }),
          authorization: server.getAuthorization({ email })
        })
      } else {
        reject(new Error('[LOGIN] email and password do not match'))
      }
    }, delayInMs)
  })
}

export const getAuthorization = ({ userId, token }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (validate.tokenIsValid({ userId, token })) {
        resolve({
          message: `[GET_AUTHORIZATION] token is valid`,
          email: helpers.getUser({ userId }).email,
          authorization: server.getAuthorization({ userId })
        })
      } else {
        resolve({
          message: '[GET_AUTHORIZATION] token is not valid',
          authorization: types.auth.NOT_CONNECTED
        })
      }
    }, delayInMs)
  })
}

export const logout = ({ userId, token }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (validate.tokenIsValid({ userId, token })) {
        server.removeToken({ userId })
        resolve({
          message: `[LOGOUT] User ${userId} has been logged off. Token ${token} isn't valid any more.`
        })
      } else {
        reject(new Error('[LOGOUT] token is not valid'))
      }
    }, delayInMs)
  })
}

export const changeUserEmail = ({ userId, token, newEmail, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        validate.tokenIsValid({ userId, token }) &&
        validate.passwordIsValid({ userId, password })
      ) {
        server.changeUserEmail({ userId, newEmail })
        resolve('[CHANGE_USER_EMAIL] user email successfully changed')
      } else {
        reject(new Error('[CHANGE_USER_EMAIL] email and password do not match'))
      }
    }, delayInMs)
  })
}

export const changeUserPassword = ({
  userId,
  token,
  newPassword,
  oldPassword
}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        validate.tokenIsValid({ userId, token }) &&
        validate.passwordIsValid({ userId, password: oldPassword })
      ) {
        server.changeUserPassword({ userId, newPassword })
        resolve('[CHANGE_USER_PASSWORD] user password successfully changed')
      } else {
        reject(
          new Error('[CHANGE_USER_PASSWORD] email and password do not match')
        )
      }
    }, delayInMs)
  })
}

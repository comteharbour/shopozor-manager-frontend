import * as server from './server'
import * as validate from '../validate'
import types from '../../../types'

const delayInMs = 1000

export const createProduct = ({ id, token, newProduct }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        validate.tokenIsValid({ id, token }) &&
        validate.userHasAuthorization({
          id,
          authorization: types.auth.PRODUCER
        }) &&
        validate.productIsValid({ product: newProduct })
      ) {
        server.createProduct({ id, newProduct })
        resolve({
          message: `[CREATE_PRODUCT] new product successfully created`,
          products: server.getProducts({ id })
        })
      } else {
        reject(new Error(`[CREATE_PRODUCT] could not create product`))
      }
    }, delayInMs)
  })
}

export const getProducts = ({ id, token }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (validate.tokenIsValid({ id, token })) {
        resolve({
          message: `[GET_PRODUCTS] products successfully received`,
          products: server.getProducts({ id })
        })
      } else {
        reject(new Error('[GET_PRODUCTS] not authorized'))
      }
    }, delayInMs)
  })
}

export const updateProduct = ({ userId, token, productId, newProps }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (validate.tokenIsValid({ id: userId, token })) {
        server.updateProduct({ userId, productId, newProps })
        resolve({
          message: `[UPDATE_PRODUCT] product successfully updated`,
          products: server.getProducts({ id: userId })
        })
      } else {
        reject(new Error(`[UPDATE_PRODUCT] not authorized`))
      }
    }, delayInMs)
  })
}

export const removeProduct = ({ userId, token, productId }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (validate.tokenIsValid({ id: userId, token })) {
        server.removeProduct({ userId, productId })
        resolve({
          message: `[REMOVE_PRODUCT] product successfully removed`,
          products: server.getProducts({ id: userId })
        })
      } else {
        reject(new Error(`[REMOVE_PRODUCT] not authorized`))
      }
    }, delayInMs)
  })
}

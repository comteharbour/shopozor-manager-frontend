// import types from '../../../types'
// import * as storage from '../storage'
import * as helpers from '../helpers'

export const createProduct = ({ email, userId, newProduct }) => {
  const user = helpers.getUser({ email, userId })
  const productWithId = {
    userId: generateProductId({ userId: user.userId }),
    ...newProduct
  }
  const newProducts = user.products
  newProducts.push(productWithId)
  helpers.updateUser({ email, userId, newProps: { products: newProducts } })
}

const generateProductId = ({ userId }) => `${userId}-${Date()}`

export const getProducts = ({ userId, email }) => {
  const user = helpers.getUser({ email, userId })
  return user.products
}

export const updateProduct = ({ email, userId, productId, newProps }) => {
  const user = helpers.getUser({ email, userId })
  const productIndex = helpers.getProductIndex({ email, userId, productId })
  const newProduct = { ...user.products[productIndex], ...newProps }
  const newProducts = user.products
  newProducts.splice(productIndex, 1, newProduct)
  helpers.updateUser({
    email,
    userId,
    newProps: { products: newProducts }
  })
}

export const removeProduct = ({ email, userId, productId }) => {
  const user = helpers.getUser({ email, userId })
  const productIndex = helpers.getProductIndex({ email, userId, productId })
  const newProducts = user.products
  newProducts.splice(productIndex, 1)
  helpers.updateUser({
    email,
    userId,
    newProps: { products: newProducts }
  })
}

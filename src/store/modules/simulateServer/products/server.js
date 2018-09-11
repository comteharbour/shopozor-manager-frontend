// import types from '../../../types'
// import * as storage from '../storage'
import * as helpers from '../helpers'

export const createProduct = ({ email, id, newProduct }) => {
  const user = helpers.getUser({ email, id })
  const productWithId = {
    id: generateProductId({ userId: user.id }),
    ...newProduct
  }
  const newProducts = user.products
  newProducts.push(productWithId)
  helpers.updateUser({ email, id, newProps: { products: newProducts } })
}

const generateProductId = ({ userId }) => `${userId}-${Date()}`

export const getProducts = ({ id, email }) => {
  const user = helpers.getUser({ email, id })
  return user.products
}

export const updateProduct = ({ userEmail, userId, productId, newProps }) => {
  const user = helpers.getUser({ email: userEmail, id: userId })
  const productIndex = helpers.getProductIndex({ userEmail, userId, productId })
  const newProduct = { ...user.products[productIndex], ...newProps }
  const newProducts = user.products
  newProducts.splice(productIndex, 1, newProduct)
  helpers.updateUser({
    email: userEmail,
    id: userId,
    newProps: { products: newProducts }
  })
}

export const removeProduct = ({ userEmail, userId, productId }) => {
  const user = helpers.getUser({ email: userEmail, id: userId })
  const productIndex = helpers.getProductIndex({ userEmail, userId, productId })
  const newProducts = user.products
  newProducts.splice(productIndex, 1)
  helpers.updateUser({
    email: userEmail,
    id: userId,
    newProps: { products: newProducts }
  })
}

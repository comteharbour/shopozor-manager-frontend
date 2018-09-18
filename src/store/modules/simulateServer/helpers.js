import * as storage from './storage'

export const getUserIndex = ({ email, userId }) => {
  const users = storage.read().users
  for (let userIndex in users) {
    if (email === users[userIndex].email || userId === users[userIndex].userId) {
      return userIndex
    }
  }
  console.error(`Can't find ${email} / ${userId} on server.`)
}

export const getUser = ({ email, userId }) => {
  const users = storage.read().users
  for (let userIndex in users) {
    if (email === users[userIndex].email || userId === users[userIndex].userId) {
      return users[userIndex]
    }
  }
}

export const updateUser = ({ email, userId, newProps }) => {
  const userIndex = getUserIndex({ email, userId })
  const oldServerData = storage.read()
  const newUser = { ...oldServerData.users[userIndex], ...newProps }
  const users = oldServerData.users
  users.splice(userIndex, 1, newUser)
  const newServerData = { ...oldServerData, users }
  storage.write(newServerData)
}

export const getProductIndex = ({ email, userId, productId }) => {
  const user = getUser({ email, userId })
  for (let productIndex in user.products) {
    console.log(user.products[productIndex])
    if (productId === user.products[productIndex].productId) {
      console.log(productIndex)
      return productIndex
    }
  }
  console.error(
    `Can't find product ${productId} of ${email} / ${userId} on server.`
  )
}

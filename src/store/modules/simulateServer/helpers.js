import * as storage from './storage'

export const getUserIndex = ({ email, id }) => {
  const users = storage.read().users
  for (let userIndex in users) {
    if (email === users[userIndex].email || id === users[userIndex].id) {
      return userIndex
    }
  }
  console.error(`Can't find ${email} / ${id} on server.`)
}

export const getUser = ({ email, id }) => {
  const users = storage.read().users
  for (let userIndex in users) {
    if (email === users[userIndex].email || id === users[userIndex].id) {
      return users[userIndex]
    }
  }
  console.error(`Can't find ${email} / ${id} on server.`)
}

export const updateUser = ({ email, id, newProps }) => {
  const userIndex = getUserIndex({ email, id })
  const oldServerData = storage.read()
  const newUser = { ...oldServerData.users[userIndex], ...newProps }
  const users = oldServerData.users
  users.splice(userIndex, 1, newUser)
  const newServerData = { ...oldServerData, users }
  storage.write(newServerData)
}

export const getProductIndex = ({ userEmail, userId, productId }) => {
  const user = getUser({ email: userEmail, id: userId })
  for (let productIndex in user.products) {
    if (productId === user.products[productIndex].id) {
      return productIndex
    }
  }
  console.error(
    `Can't find product ${productId} of ${userEmail} / ${userId} on server.`
  )
}

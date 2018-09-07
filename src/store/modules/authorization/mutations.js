import types from '../../types'

export const signup = ({ users }, payload) => {
  users.push({
    email: payload.email,
    password: payload.password,
    authorization: types.auth.CONSUMER
  })
}

export const login = (state, payload) => {
  const matchUser = index => {
    const user = state.users[userIndex]
    return matchUserEmail(user) && matchUserPassword(user)
  }
  const matchUserEmail = user => user.email === payload.email
  const matchUserPassword = user => user.password === payload.password

  let userIndex = 0
  while (userIndex < state.users.length && !matchUser(userIndex)) {
    userIndex++
  }

  if (userIndex < state.users.length) {
    state.authorization = state.users[userIndex].authorization
    state.userId = userIndex
    alert(`user : ${state.users[userIndex].email} | authorization : ${state.users[userIndex].authorization}`)
  } else alert('e-mail and password do not match')
}

export const logout = state => {
  state.authorization = types.auth.NOT_CONNECTED
}

export const setAuthorization = (state, payload) => {
  state.users[state.userId].authorization = payload.authorization
  state.authorization = payload.authorization
}

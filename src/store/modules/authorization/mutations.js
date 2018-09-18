import types from '../../../types'

export function storeAuthorization (state, payload) {
  state.email = payload.email
  state.userId = payload.userId
  state.token = payload.token
  state.authorization = payload.authorization

  console.log(state.authorization)
}

export function logout (state) {
  state.userId = undefined
  state.token = undefined
  state.email = undefined
  state.authorization = types.auth.NOT_CONNECTED

  this.$router.push({ path: '/' })
}

export function error (state, error) {
  console.log(error)
}

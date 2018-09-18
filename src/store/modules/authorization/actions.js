import * as server from '../simulateServer/authorization'

export function signup ({ commit }, { email, password }) {
  server
    .signup({ email, password })
    .then(response => {
      console.log(response)
      this.$router.push({ path: '/ConfirmationEmailSent' })
    })
    .catch(error => commit('error', error))
}

export function login ({ commit }, { email, password, stayLoggedIn }) {
  server
    .login({ email, password })
    .then(response => {
      commit('storeAuthorization', {
        email,
        token: response.token,
        userId: response.userId,
        authorization: response.authorization
      })
      stayLoggedIn ? saveToken(response.userId, response.token) : removeToken()
      this.$router.back()
    })
    .catch(error => commit('error', error))
}

function saveToken (userId, token) {
  localStorage.setItem('userId', userId)
  localStorage.setItem('token', token)
}

function removeToken () {
  localStorage.removeItem('userId')
  localStorage.removeItem('token')
}

export function getAuthorization ({ commit }, { userId, token }) {
  server
    .getAuthorization({ userId, token })
    .then(response => {
      commit('storeAuthorization', {
        email: response.email,
        token,
        userId,
        authorization: response.authorization
      })
    })
    .catch(error => {
      commit('error', error)
    })
}

export function logout ({ commit }, { userId, token }) {
  server
    .logout({ userId, token })
    .then(response => {
      commit('logout')
      removeToken()
    })
    .catch(error => {
      commit('error', error)
    })
}

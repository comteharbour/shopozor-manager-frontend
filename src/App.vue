<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { initFakeServer } from './store/modules/simulateServer/storage'
import { createUser, updateUserProfile, changeUserEmail, changeUserPassword } from './store/modules/simulateServer/authorization'

export default {
  name: 'App',
  created: () => {
    const serverMustBeInitialized = true // localStorage.getItem('fake_server') === null
    if (serverMustBeInitialized) initFakeServer()
    createUser({email: '6@6.6', password: '666666'})
      .then(response => console.log(response))
      .catch(error => console.log(error))
    const newProfile = {
      description: 'Hello World !'
    }
    updateUserProfile({email: '6@6.6', password: '666666', newProfile})
      .then(response => console.log(response))
      .catch(error => console.log(error))
    changeUserEmail({oldEmail: '6@6.6', newEmail: '7@7.7', password: '666666'})
      .then(response => console.log(response))
      .catch(error => console.log(error))
    changeUserPassword({email: '6@6.6', newPassword: '777777', oldPassword: '666666'})
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }
}
</script>

<style>
</style>

<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { initFakeServer } from './store/modules/simulateServer/storage'
import * as auth from './store/modules/simulateServer/authorization'
import * as products from './store/modules/simulateServer/products'

export default {
  name: 'App',
  methods: {
    ...mapActions(['getAuthorization'])
  },
  created () {
    const serverMustBeInitialized = localStorage.getItem('fake_server') === null
    if (serverMustBeInitialized) {
      initFakeServer()

      // bidouillage de tests
      auth.signup({email: '6@6.6', password: '666666'})
        .then(response => {
          console.log(response)
          auth.login({email: '6@6.6', password: '666666'})
            .then(response => {
              console.log(response.message)
              localStorage.setItem('userId', response.userId)
              localStorage.setItem('token', response.token)

              let userId = localStorage.getItem('userId')
              let token = localStorage.getItem('token')

              auth.changeUserEmail({userId, token, newEmail: '7@7.7', password: '666666'})
                .then(response => {
                  console.log(response)

                  auth.changeUserPassword({userId, token, oldPassword: '666666', newPassword: '777777'})
                    .then(response => {
                      console.log(response)

                      auth.logout({userId, token})
                        .then(response => {
                          console.log(response)

                          auth.login({ email: 'producteur@budzons.ch', password: 'Budzonnerie1' })
                            .then(response => {
                              console.log(response.message)
                              localStorage.setItem('userId', response.userId)
                              localStorage.setItem('token', response.token)

                              userId = localStorage.getItem('userId')
                              token = localStorage.getItem('token')

                              products.createProduct({ userId, token, newProduct: {name: 'Ragoût de budzon'} })
                                .then(response => {
                                  localStorage.setItem('products', JSON.stringify(response.products))
                                  console.log(response.message)

                                  products.getProducts({userId, token})
                                    .then(response => {
                                      localStorage.setItem('products', JSON.stringify(response.products))
                                      console.log(response.message)

                                      const productId = JSON.parse(localStorage.getItem('products'))[0].productId
                                      const newProps = { description: 'De délicieuses fourmis en ragoût' }
                                      products.updateProduct({ userId, token, productId, newProps })
                                        .then(response => {
                                          console.log(response.message)
                                          localStorage.setItem('products', JSON.stringify(response.products))

                                          products.removeProduct({ userId, token, productId })
                                            .then(response => {
                                              console.log(response.message)
                                              localStorage.setItem('products', JSON.stringify(response.products))
                                            })
                                            .catch(error => console.log(error))
                                        })
                                        .catch(error => console.log(error))
                                    })
                                    .catch(error => console.log(error))
                                })
                                .catch(error => console.log(error))
                            })
                            .catch(error => console.log(error))
                        })
                        .catch(error => console.log(error))
                    })
                    .catch(error => console.log(error))
                })
                .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    } else {
      this.getAuthorization({
        userId: localStorage.getItem('userId'),
        token: localStorage.getItem('token')
      })
    }
  }
}
</script>

<style>
</style>

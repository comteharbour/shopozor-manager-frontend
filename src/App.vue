<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { initFakeServer } from './store/modules/simulateServer/storage'
import * as auth from './store/modules/simulateServer/authorization'
import * as products from './store/modules/simulateServer/products'

export default {
  name: 'App',
  created: () => {
    const serverMustBeInitialized = true // localStorage.getItem('fake_server') === null
    if (serverMustBeInitialized) initFakeServer()

    // bidouillage de tests
    auth.createUser({email: '6@6.6', password: '666666'})
      .then(response => {
        console.log(response)
        auth.login({email: '6@6.6', password: '666666'})
          .then(response => {
            console.log(response.message)
            localStorage.setItem('id', response.id)
            localStorage.setItem('token', response.token)

            let id = localStorage.getItem('id')
            let token = localStorage.getItem('token')

            auth.changeUserEmail({id, token, newEmail: '7@7.7', password: '666666'})
              .then(response => {
                console.log(response)

                auth.changeUserPassword({id, token, oldPassword: '666666', newPassword: '777777'})
                  .then(response => {
                    console.log(response)

                    auth.logout({id, token})
                      .then(response => {
                        console.log(response)

                        auth.login({ email: '2@2.2', password: '222222' })
                          .then(response => {
                            console.log(response.message)
                            localStorage.setItem('id', response.id)
                            localStorage.setItem('token', response.token)

                            id = localStorage.getItem('id')
                            token = localStorage.getItem('token')

                            products.createProduct({ id, token, newProduct: {name: 'Ragoût de budzon'} })
                              .then(response => {
                                localStorage.setItem('products', JSON.stringify(response.products))
                                console.log(response.message)

                                products.getProducts({id, token})
                                  .then(response => {
                                    localStorage.setItem('products', JSON.stringify(response.products))
                                    console.log(response.message)

                                    const productId = JSON.parse(localStorage.getItem('products'))[0].id
                                    const newProps = { description: 'De délicieuses fourmis en ragoût' }
                                    products.updateProduct({ userId: id, token, productId, newProps })
                                      .then(response => {
                                        console.log(response.message)
                                        localStorage.setItem('products', JSON.stringify(response.products))

                                        products.removeProduct({ userId: id, token, productId })
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
  }
}
</script>

<style>
</style>

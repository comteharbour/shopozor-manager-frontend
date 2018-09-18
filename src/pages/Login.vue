<template>
  <q-page padding class="q-pa-md row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-list>
        <q-item>
          <q-item-main>
            <q-field
              icon="mail">
              <q-input
                v-model="email"
                type="email"
                float-label="e-mail" />
            </q-field>
          </q-item-main>
        </q-item>
        <q-item>
            <q-item-main>
              <q-field
                icon="vpn_lock">
                <q-input
                  ref="password"
                  v-model="password"
                  type="password"
                  float-label="mot de passe"
                  @keyup.enter="login({email, password, stayLoggedIn})" />
              </q-field>
            </q-item-main>
        </q-item>
        <q-item class="row justify-center">
          <q-toggle class="q-ma-md" :class="{'text-faded': !stayLoggedIn}" v-model="stayLoggedIn" label="rester connecté"></q-toggle>
        </q-item>
        <q-item class="row justify-center">
            <q-btn class="q-ma-md" color="primary" label="Se connecter" @click="login({email, password, stayLoggedIn})" ></q-btn>
        </q-item>
        <q-item class="row justify-center">
          <router-link to="/confirmationEmailSent">J'ai oublié mon mot de passe</router-link>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      stayLoggedIn: true
    }
  },
  methods: {
    ...mapActions(['login']),
    focusPassword () {
      this.$refs.password.focus()
    }
  }
}
</script>

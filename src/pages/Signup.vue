<template>
  <q-page padding class="q-pa-md row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-list>
        <q-item>
          <q-item-main>
            <q-field
              icon="mail"
              :helper="emailHelper">
              <q-input
                v-model="email"
                type="email"
                float-label="e-mail"
                @blur="$v.email.$touch"
                @keyup.enter="focusPassword"
                :error="$v.email.$error" />
            </q-field>
          </q-item-main>
          <q-item-side right>
            <q-icon name="check_circle" v-show="!this.$v.email.$invalid" />
          </q-item-side>
        </q-item>
        <q-item>
            <q-item-main>
              <q-field
                icon="vpn_lock"
                :helper="passwordHelper"
                :class="{valid: !$v.email.$invalid}">
                <q-input
                  ref="password"
                  v-model="password"
                  type="password"
                  float-label="mot de passe"
                  @blur="$v.password.$touch"
                  @keyup.enter="focusConfirmPassword"
                  :error="$v.password.$error" />
              </q-field>
            </q-item-main>
          <q-item-side right>
            <q-icon name="check_circle" v-show="!this.$v.password.$invalid" />
          </q-item-side>
        </q-item>
        <q-item>
            <q-item-main>
              <q-field
                icon="vpn_lock"
                :helper="confirmPasswordHelper"
                :class="{valid: !$v.confirmPassword.$invalid}">
                <q-input
                  ref="confirmPassword"
                  v-model="confirmPassword"
                  type="password"
                  float-label="répétez votre mot de passe"
                  @blur="$v.confirmPassword.$touch"
                  @keyup.enter="submit"
                  :error="$v.confirmPassword.$error" />
              </q-field>
            </q-item-main>
          <q-item-side right>
            <q-icon name="check_circle" v-show="!this.$v.confirmPassword.$invalid" />
          </q-item-side>
        </q-item>
        <q-item class="row justify-center">
            <q-btn class="q-ma-md" color="primary" label="Créer mon compte" @click="submit" ></q-btn>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'

export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  validations: {
    email: {
      required, email
    },
    password: {
      required, minLength: minLength(6)
    },
    confirmPassword: {
      required, sameAs: sameAs('password')
    }
  },
  computed: {
    emailHelper: function () {
      if (!this.$v.email.$error) return 'ceci sera votre nom de budzon'
      else return 'veuillez entrer un email valide'
    },
    passwordHelper: function () {
      if (!this.$v.password.$error) return '6 caractères ou plus'
      else return `il manque ${6 - this.password.length} caractère${this.password.length < 5 ? 's' : ''}`
    },
    confirmPasswordHelper: function () {
      if (!this.$v.confirmPassword.$error) return 'pour éviter les erreurs de frappe'
      else return 'les deux mots de passe sont différents'
    }
  },
  methods: {
    focusPassword () {
      this.$refs.password.focus()
    },
    focusConfirmPassword () {
      this.$refs.confirmPassword.focus()
    },
    submit () {
      this.$v.$touch()

      if (this.$v.$error) {
        this.$q.notify('Veuillez corriger les erreurs.')
      } else {
        this.$store.dispatch('signup', {email: this.email, password: this.password})
      }
    }
  }
}
</script>

<style lang="stylus">
.q-list {
  // width: 200px
}
</style>

<template>
  <q-page class="q-pa-md row justify-center">
    <div class="row gutter-sm">
      <q-input
        class="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-4"
        v-model="mail"
        type="email" />
      <q-input
        class="col-7"
        v-model="password"
        type="password" />
      <q-btn
        class="col-12"
        color="primary"
        label="Se connecter"
        @click="login({email: mail, password: password})" />
      <div
        class="col-8">{{ authorization }}</div>
      <div
        class="col-8">{{ userId }}</div>
      <q-btn
        class="col-6"
        color="primary"
        :label="`counter 1 : ${counter1}`"
        @click="increment1" />
      <q-btn
        class="col-6"
        color="primary"
        :label="`counter 2 : ${counter2}`"
        @click="increment2" />
      <div class="col-8">dummy content</div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PageIndex',
  computed: {
    ...mapGetters([
      'authorization',
      'userId',
      'counter1',
      'counter2'
    ])
  },
  data () {
    return {
      mail: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'login',
      'increment1',
      'increment2'
    ])
  }
}
</script>

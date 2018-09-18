<template>
  <div class="fixed-center text-center">
    <p>
      <q-spinner size="50px" />
    </p>
    <p class="text-faded">Déconnection...</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Logout',
  created () {
    this.logout({userId: this.userId, token: this.token})
  },
  computed: {
    ...mapGetters(['userId', 'token'])
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

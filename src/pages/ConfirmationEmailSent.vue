<template>
  <q-page padding class="justify-center">
    <div>Un email vous a été envoyé. Confirmez votre inscription en suivant le lien y figurant.</div>
    <div>
      <q-btn @click="home">Accueil</q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ConfirmationEmailSent',
  methods: {
    home () { this.$router.push('/') }
  }
}
</script>

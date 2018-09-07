<template>
  <q-layout view="HHH Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
      >
        <q-btn
          flat
          dense
          round
          @click="drawerOpen = !drawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          La Budzonnerie - Gestion
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="drawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Coucou</q-list-header>
        <q-item @click.native="() => window.console.log('click 1')">
          <q-item-side icon="school" />
          <q-item-main label="Produits" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click.native="() => alert('click 2')">
          <q-item-side icon="code" />
          <q-item-main label="Profile" sublabel="github.com/quasarframework" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'SzrLayout',
  data () {
    return {
      drawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style>
</style>

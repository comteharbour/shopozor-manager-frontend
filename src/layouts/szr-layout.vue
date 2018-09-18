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
        :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">
      <side-drawer-content />
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import SideDrawerContent from '../components/SideDrawerContent'

export default {
  name: 'SzrLayout',
  data () {
    return {
      drawerOpen: this.$q.platform.is.desktop
    }
  },
  components: {SideDrawerContent}
}
</script>

<style>
</style>

<template>
  <q-list
    no-border
    link
    inset-delimiter
  >
  <q-list-header>
    {{ user }}
  </q-list-header>
    <page-link
      v-for="el in access"
      v-if="el !== separator"
      :key="pages[el].path"
      :path="pages[el].path"
      :label="pages[el].label" />
    <q-item-separator v-else />
  </q-list>
</template>

<script>
import {mapGetters} from 'vuex'
import access from '../../router/access'
import pages from '../../router/pages'
import types from '../../types'
import PageLink from './PageLink'

export default {
  name: 'SideDrawer',
  data () {
    return {
      pages,
      separator: types.links.SEPARATOR
    }
  },
  props: { drawerOpen: Boolean },
  computed: {
    ...mapGetters(['email', 'authorization']),
    access: function () { return access(this.authorization) },
    user () {
      if (this.email !== undefined) return this.email
      else return 'non connecté'
    }
  },
  components: {
    PageLink
  }
}
</script>

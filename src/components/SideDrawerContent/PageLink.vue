<template>
    <q-item
      v-if="label !== undefined && actualPath !== path"
      @click.native="() => $router.push({path})">
        <q-item-main :label="label" />
    </q-item>
</template>

<script>
export default {
  name: 'pageLink',
  props: {
    path: String,
    label: String
  },
  computed: {
    actualPath () {
      return this.$route.path
    }
  }
}
</script>

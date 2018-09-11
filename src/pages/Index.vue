<template>
  <q-page padding class="row justify-center flex-gutter-docs">
    <div style="width: 800px; max-width: 90vw;">
    </div>
  </q-page>
</template>

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
      email: '',
      password: '',
      message: ''
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

<style lang="stylus">
.flex-gutter-docs {
  .doc-container.with-bg {
    background: rgba(255, 0, 0, 0.1);
    overflow: hidden;
  }

  .doc-container + .doc-container {
    margin-top: 25px;
  }

  .my-content {
    padding: 10px 15px;
    background: rgba(86, 61, 124, 0.15);
    border: 1px solid rgba(86, 61, 124, 0.2);
  }
}
</style>

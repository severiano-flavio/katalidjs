<template>
  <div id="app" class="corpo" v-cloak>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
    pereira: false
    }
  },
      mounted() {
      this.$store.dispatch('loadPosts')
    }
}

</script>
<style>

html { 
  scroll-behavior: smooth;
}
</style>

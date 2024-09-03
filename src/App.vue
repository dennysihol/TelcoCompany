<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

console.log('test jalan')

export default {
  name: 'app',
  components: {
    Header,
  }
}
</script>
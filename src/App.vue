<template>
  
  <GoTop/>
  <AlertMessage/>
  <RouterView />
</template>

<script>

import GoTop from '@/components/GoTop.vue';
import AlertMessage from '@/components/AlertMessage.vue'
export default {
  
  components: {
    GoTop,
    AlertMessage
  }
}
</script>

<style lang="scss">
@import './assets/scss/all.scss';


</style>

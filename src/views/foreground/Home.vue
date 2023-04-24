<template>
    <Navber/>
     <Banner/>
    <Footer/>


</template>

<script>

import Banner from '@/components/Banner.vue';
import Navber from '@/components/Navber.vue';
import Footer from '@/components/Footer.vue';
export default {
  
  components: {
    Navber,
    Banner,
    Footer
    
  }
}
</script>
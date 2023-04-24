<template>
  <div class="gotop">
    <a href="#" ><i class="far fa-caret-square-up"></i></a>
  </div>
</template>


<script>
import $ from "jquery";
export default {
  mounted:function(){
$('.gotop').click(function(event) {
  event.preventDefault();
  $('html,body').scrollTop(0);
 });
}
}
</script>


<style scoped>
.gotop{
  position: fixed;
  right: 20px;
  bottom: 10px;
  z-index: 99;
}
.gotop a {
  color: #5e6e6e;
  font-size: 40px;
}
</style>

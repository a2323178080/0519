<template>
  <Navber/>
  <div class="products">
    <div class="container">
      <!-- 優惠碼 -->
      <div class="row d-flex justify-content-center align-items-center border py-3 mx-0">


        <div class="d-none d-md-block col-md-2 ">
          <img src="../../assets/優惠券用.jpg" class="img-fluid" alt="優惠碼" width="200">
        </div>

        <div class="col-12 col-md-9 pt-4 fs-4">
          <p>領取優惠碼，一起享受美食吧</p>
          <p>1/10前輸入優惠碼 <span class="border border-dark py-1 px-2 text-strong fw-bold">ilovetiffany</span>，結帳時可享 8 折優惠，一起享用美食吧!</p>
        </div>


      </div>


      <div class="row mt-4">
        <div class="col-12 mb-4">
          <div class="row d-flex justify-content-between align-items-end">


            <!-- 選單 -->
            <div class="d-none d-md-block col-md-9">
              <router-link to="all" class="pe-3 text-dark fs-5 fw-bold a-hover">
                <i class="fas fa-utensils"></i>
                顯示全部
              </router-link>
              <router-link to='rice' class="pe-3 text-dark fs-5 fw-bold a-hover">
               <i class="fas fa-utensils"></i>
                吃飯
              </router-link>
              <router-link to='noodle' class="pe-3 text-dark fs-5 fw-bold a-hover">
                <i class="fas fa-utensils"></i>
                吃麵
              </router-link>
              <router-link to='cuisine' class="pe-3 text-dark fs-5 fw-bold a-hover">
                <i class="fas fa-utensils"></i>
                私房料理
              </router-link>
              <router-link to='dessert' class="pe-3 text-dark fs-5 fw-bold a-hover">
                <i class="fas fa-utensils"></i>
                甜點
              </router-link>
            </div>
            
            <div class="col-md-3">
              <!-- 下拉式選單 -->
              <select class="form-select d-block d-md-none select-icon mt-0"  @change="toProducts">
                <option value="all" selected> 顯示全部</option>
                <option value="rice">吃飯</option>
                <option value="noodle"> 吃麵</option>
                <option value="cuisine"> 私房料理</option>
                <option value="dessert"> 甜點</option>
              </select>
            </div>


          </div>
        </div>
        <RouterView/>
      </div>
    </div>
  </div>
  <Footer/>
</template>






<script>
import Navber from '@/components/Navber.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Products',
  components: {
    Navber,
    Footer
  },
  methods: {
    toProducts (e) {
      const path = `/products/${e.target.value}`
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.products{
  margin-top: 100px;
}
</style>

<template>
    <Navber/>
    <Banner/>
    <div class="mt-5">
    <Loading v-model:active="isLoading"/>
    <div class="container">
      <section>

        <div class="d-flex justify-content-center">
        <h1 class="fs-3 fw-bold">嶢式料理</h1>
        </div>

        <div class="card-group mt-5">

          <div class="card border-0   ">
            <div class="px-5 ">
              <img src="../../assets/img1.jpg" class="card-img-top " alt="色澤鮮美圖" >
            </div>
            <div class="card-body animated">
              <h3 class="card-title text-center fw-bold">色澤鮮美</h3>
              <p class="card-text mt-3">獨特的擺盤與豐富的美感，為每一道料理呈現完美色澤</p>
            </div>
          </div>

          <div class="card border-0 ">
            <div class="px-5">
              <img src="../../assets/img2.jpg" class="card-img-top " alt="天然食材圖">
            </div>
            <div class="card-body animated">
              <h3 class="card-title text-center fw-bold">天然食材</h3>
              <p class="card-text mt-3">所有食材皆不添加人工香料，以純樸為出發用心料理。</p>
            </div>
          </div>

          <div class="card border-0">
            <div class="px-5">
              <img src="../../assets/img3.jpg" class="card-img-top" alt="營養滿分圖">
            </div>
            <div class="card-body animated">
              <h3 class="card-title text-center fw-bold">營養滿分</h3>
              <p class="card-text mt-3">色香味俱全外，顧及每一個味蕾的營養是我們的責任。</p>
            </div>
          </div>

        </div>
        
        <div class="d-flex justify-content-center mt-5 animated">
          <button type="button" class="btn btn-dark btn-lg btn-hover rounded-0"><a href="#/about" class="text-light">了解更多 嶢式料理</a></button>
        </div>
      </section>



      <section class="mt-5">
        <div class="row">
          <div class="col-6 col-md-6 animated">
            <div class="card mb-3 border-0" style="max-width: 540px;">


              <div class="row g-0">
                <div class="col-md-4 ">
                  <img src="../../assets/漢堡.jpg" width="180" alt="優惠碼">
                </div>

                <div class="col-md-8 ">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">領取優惠碼</h5>
                    <p class="card-text mt-3">01/10前結帳時輸入，優惠碼 <span class="text-strong">ilovetiffany</span> 可享 8 折優惠，時間有限要買要快!</p>
                    <div class="d-flex justify-content-end">
                      <a href="#/products/all" class="btn btn-dark btn-hover rounded-0">查看更多</a>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div class="col-6 col-md-6 d-flex justify-content-center animated">
            <div class="card mb-3 border-0" style="max-width: 540px;">


              <div class="row  g-0">
                <div class="col-md-8 ">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">新品上市</h5>
                    <p class="card-text mt-3">快來看看本週新料理，絕對讓您垂涎三尺</p>
                    <div class="d-flex justify-content-end">
                      <a href="#/products/all" class="btn btn-dark btn-hover rounded-0">查看更多</a>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 ">
                  <img src="../../assets/優惠券用.jpg" width="180" alt="商品">
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="mt-5">
        
        <div class="row row-cols-1 row-cols-md-2">
          <div class="col animated">
            <div class="card border-0">

              <img src="../../assets/排骨炒飯.jpg" class="card-img-top" alt="排骨炒飯" >
              
              <div class="card-body animated">
                <h3 class="card-title fw-bold">吃飯</h3>
                <p class="card-text mt-3">飯類做為主食，提供滿滿能量之餘，也能感受到美食所賦予滿滿的愛。</p>
                <div class="d-flex justify-content-end">
                  <a href="#/products/rice" class="btn btn-dark btn-hover rounded-0">選購去!</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col animated">
            <div class="card border-0">
              
              <img src="../../assets/義大利麵.jpg" class="card-img-top"  alt="義大利麵">
              
              <div class="card-body animated">
                <h3 class="card-title fw-bold">吃麵</h3>
                <p class="card-text mt-3">Q彈麵食佐獨特醬料，美味瞬間昇華。
                </p>
                <div class="d-flex justify-content-end">
                  <a href="#/products/noodle" class="btn btn-dark btn-hover rounded-0">選購去!</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col mt-md-5 animated">
            <div class="card border-0">
              
              <img src="../../assets/熱狗堡.jpg" class="card-img-top" alt="熱狗堡">
              
              <div class="card-body animated">
                <h3 class="card-title fw-bold">私房料理</h3>
                <p class="card-text mt-3">用心製作每一道料理是我們的精神。</p>
                <div class="d-flex justify-content-end">
                  <a href="#/products/cuisine" class="btn btn-dark btn-hover rounded-0">選購去!</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col mt-md-5 animated">
            <div class="card border-0">
              
              <img src="../../assets/芒果布丁.jpg" class="card-img-top" alt="芒果布丁">
              
              <div class="card-body animated">
                <h3 class="card-title fw-bold">甜點</h3>
                <p class="card-text mt-3">讓另一個胃充滿小宇宙。</p>
                <div class="d-flex justify-content-end">
                  <a href="#/products/dessert" class="btn btn-dark btn-hover rounded-0">選購去!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  </div>

  <Footer/>
</template>





























<script>

import Banner from '@/components/Banner.vue';
import Navber from '@/components/Navber.vue';
import Footer from '@/components/Footer.vue';
import $ from 'jquery'


export default {

  components: {
    Navber,
    Banner,
    Footer
    
  },
  data(){
    return{
      isLoading:false
    }
  },
  mounted () {
    // 類似監聽 scroll 滾動位置
    $(window).scroll(function () {
      // 讀取 scroll 滾動位置
      const scrollPos = $(window).scrollTop();
      // 讀取 window 高度
      const windowHeight = $(window).height();

      
      // css 動畫
      $('.animated').each(function () {
        const thisPos = $(this).offset().top
        if ((windowHeight + scrollPos) >= (thisPos + 300)) {
          $(this).addClass('fadeIn')
        }
      })
    })
  }


  
}
</script>

<style scoped>
/* animated */
.animated{
  opacity: 0;
  transition: all 2s;
  transform: translateX(-300px);
}
.fadeIn{
  opacity: 1;
  transform: translateY(0px);
}
</style>

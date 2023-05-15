<template>
  <Navber/>
  <Banner/>
  <div class="about mt-5">
    <Loading v-model:active="isLoading"/>
    <div class="container">



      <section>
        <div class="d-flex justify-content-center">
          <h1 class="fw-bold fs-2">嶢嶢食行</h1>
        </div>
        <div class="row d-flex align-items-center mt-5">

          <div class="col-md-6">
            <img src="../../assets/關於用圖.jpg" alt="關於i-Bike" class="img-fluid px-5">
          </div>
          
          <div class="col-md-6 mt-3">
            <p class="fs-5 lh-lg">
              <span class="fw-bold">嶢嶢食行</span>專注於做好每一道料理。堅持純手工，慢火細熬，職人精神。用心創造每一道具有靈魂的料理，期許感動每一個不平凡的味蕾。
              
            </p>
          </div>
        </div>
      </section>


      <section class="mt-5">
        <h2 class="text-center fw-bold">聯繫我們</h2>
        <div class="row mt-5">
          <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <img src="../../../public/img/logo.png" alt="i-Bike" />
            
            <p class="mb-4 fs-5"><span class="fw-bold">實體店面 :</span> 300新竹市東區中央路229號(新竹巨城)</p>
            <p class="mb-4 fs-5"><span class="fw-bold">營業時間 :</span> 周一至六早10點 ~ 晚9點，周日公休</p>
            <p class="mb-4 fs-5"><span class="fw-bold">聯絡電話 :</span> 04-12345678</p>
            <div class="mb-4">
              <a href="#" @click.prevent=""><i class="fab fa-facebook-square me-4 fs-4 text-dark a-hover"></i></a>
              <a href="#" @click.prevent=""><i class="fab fa-facebook-messenger me-4 fs-4 text-dark a-hover"></i></a>
              <a href="#" @click.prevent=""><i class="fab fa-instagram-square fs-4 text-dark a-hover"></i></a>
            </div>
          </div>
          <div class="col-md-6">
           

             <iframe 
              width="600" 
              height="450" 
              frameborder="0" 
              style="border:0" 
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDwzUIk5G__4taLWxaMxiga1BrYALj0OFU&q=Big City遠東巨城購物中心" 
              allowfullscreen>
              </iframe>
            
          </div>
        </div>
      </section>

      <section class="mt-5">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-7">
              <h2 class="text-center fw-bold mb-4">提供寶貴意見</h2>
              <Form class="row g-3 needs-validation" v-slot="{ errors }" @submit="submitFrom">
                <div class="col-md-12">
                  <label for="name" class="form-label">姓名 <small>(必填)</small></label>
                  <Field type="text" class="form-control"  name="姓名" id="name" :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required"></Field>
                  <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="col-md-12">
                  <label for="email" class="form-label">電子郵件 <small>(必填)</small></label>
                  <Field type="email" class="form-control" id="email" name="Email" :class="{ 'is-invalid': errors['Email'] }" placeholder="請輸入電子郵件" rules="email|required"></Field>
                  <ErrorMessage name="Email" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="col-md-12">
                  <label for="phone" class="form-label">電話 <small>(必填)</small></label>
                  <Field type="number" class="form-control" :class="{ 'is-invalid': errors['電話'] }" name="電話" id="phone" placeholder="請輸入電話" rules="required"></Field>
                  <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="col-md-12">
                  <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="textarea" style="height: 150px" required></textarea>
                    <label for="textarea">請輸入內容</label>
                  </div>
                  <div class="valid-feedback">
                    輸入正確
                  </div>
                </div>
                <div class="col-12 d-flex justify-content-end">
                  <button class="btn btn-dark btn-hover rounded-0" type="submit">送出</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Navber from '@/components/Navber.vue'
import Banner from '@/components/Banner.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'About',
  components: {
    Navber,
    Banner,
    Footer
  },
  data () {
    return {
      isLoading: false
    }
  }
}
</script>

<style scoped>

</style>

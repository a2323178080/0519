<template>
  <div class="nav" >
    <Loading v-bind:active="isLoading"/>
    <nav class="navbar navbar-expand-lg  navbar-light bg-light text-dark fixed-top">
      <div class="container-fluid">


    <!-- 1.menu toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>


    <!-- 2.brand logo -->
        <router-link to="/" class="nav-link"
          ><img src="../../public/img/logo.png" alt="i-Bike"
        /></router-link>



    <!-- 3.登入按鈕購物車按鈕區 -->
        <div class="d-flex  d-md-block pt-1 me-2 order-lg-last">
          <!-- 登入按鈕 -->
          <a class="navbar-brand text-dark a-hover" href="#/login">
            <i class="fas fa-user-circle"></i>
          </a>

          <!-- 購物車按鈕 -->
          <a class="navbar-brand text-dark me-0 a-hover cart" href='#'  data-bs-toggle="dropdown">
            <i class="fas fa-shopping-cart"></i>
            <span class="badge text-light bg-danger" v-if="carts.length>0">{{ carts.length }}</span>
          </a>


          <div class="dropdown-menu dropdown-menu-end cart-box p-3 me-3">
            <h5 class="fw-bold" v-if="carts.length>0">已選購商品</h5>
            <div class="table-responsive">
              <table class="table table-sm">
                <thead class="table-dark">
                  <tr class=" text-center">
                    <th>商品名稱</th>
                    <th>數量</th>
                    <th class="text-end">價格</th>
                    <th></th>
                  </tr>
                </thead>


              <!-- 情況1:已經有東西加入購物車 -->
                <tbody>
                  <tr  v-for="item in carts" :key="item.id">
                    <td>{{ item.product.title }}</td>
                    <td class="text-center">{{ item.qty }}</td>
                    <td class="text-end">NT$ {{ item.total}}</td>
                    <td class="text-center">
                      <a href="#" @click.prevent="delCart(item.id)">
                        <i class="fas fa-trash-alt text-danger"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>


              </table>
            </div>

              <!-- 情況2:沒有東西加入購物車 -->
            <h5 class="fw-bold text-center mb-3" v-if="carts.length==0">產品尚未加入購物車!</h5>

            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-dark btn-hover rounded-0" @click="goCart" v-if="carts.length>0">
                <i class="fas fa-shopping-cart"></i> 結帳去
              </button>
              <button type="button" class="btn btn-dark btn-hover rounded-0" @click="goProducts" v-else>
                <i class="fas fa-shopping-basket"></i> 選購去
              </button>
            </div>

          </div>

        </div>


    <!-- 4.collapse區 -->
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav ">
            <li class="nav-item pt-1">
              <a href="#/products/all" class="nav-link text-dark   a-hover fw-bold">產品</a>
            </li>
            <li class="nav-item pt-1">
              <a href="#/checkOrder" class="nav-link text-dark a-hover fw-bold">訂單查詢</a>
            </li>
            <li class="nav-item pt-1">
              <a href="#/followPage" class="nav-link text-dark a-hover fw-bold">我的收藏</a>
            </li>
            <li class="nav-item pt-1">
              <a href="#/about" class="nav-link text-dark a-hover fw-bold">關於我們</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </div>





</template>










<script>
export default {
  name: 'Navber',
  data () {
    return {
      isLoading: false,
      carts: []
    }
  },
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.carts = response.data.data.carts
          this.isLoading = false
        }
      })
    },
    delCart (id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoading = true
      this.$http.delete(api).then((response) => {
        if (response.data.success) {
          this.emitter.emit('message:push', { message: response.data.message, status: 'danger' })
          this.getCart()
          this.isLoading = false
        } 
      })
    },
    // 當已經有東西加入購物車去購物車
    goCart () {
      this.$router.push('/cart')
    },
    // 當沒有東西加入購物車去所有產品選購
    goProducts () {
      this.$router.push('/products/all')
    }
  },
  created () {
    this.getCart()
    // this.emitter.on('resetCart', this.getCart)
  }
}
</script>












<style scoped>



/* 為了購購物車按鈕上的標籤設relative */
.cart {
  background-color: transparent;
  position: relative;
}



/* 購物車按鈕上的標籤定位 */
.cart .badge {
  position: absolute;
  top: 4px;
  right: -13px;
  border-radius: 50%;
}
.cart>span{
  font-size: 8px;
  padding: 4px 6px;
}



.cart-box{
  min-width: 450px;
}
/* @media (max-width: 768px) {
  .cart-box{
    min-width: 340px;
  }
} */



</style>
<template>
  <div class="all mt-3">
    <Loading v-model:active="isLoading"/>
    <!-- 商品 -->
    <div class="container px-0">
      <div class="row row-cols-1 row-cols-md-5 g-3">

        <div class="col" v-for="item in products" :key="item.id">
          <div class="card border-0 box-shadow rounded-0 h-100" @click="goProduct(item.id)">
            <div style="height: 250px; background-size: cover; background-position: center;" 
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
             >
            </div>
            <div class="card-body text-center">
              <h4 class="card-title fw-bold">{{ item.title }}</h4>
              <div class="d-flex justify-content-around align-items-end">
                <div class="fs-6 text-muted" v-if="!item.price">
                  NT$ {{ $filters.currency(item.origin_price) }}
                </div>
                <del class="fs-6 text-muted" v-if="item.price">
                  NT$ {{ $filters.currency(item.origin_price) }}
                </del>
                <div class="fs-5 text-black fw-bold" v-if="item.price">
                  NT$ {{ $filters.currency(item.price) }}
                </div>
              </div>
            </div>
            <div class="card-footer border-0 d-flex justify-content-between align-items-center bg-transparent">
              <div>
              
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning" v-if="Math.floor(Math.random() * 2) == 1"></i>
              </div>
              <small>已售出 {{ Math.floor(Math.random() * 150) }}</small>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <!-- 分頁 -->
    <Pagination :pages="pagination" @emit-pages="getProducts"/>
  </div>
</template>



















<script>
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'All',
  components: {
    Pagination
  },
  data () {
    return {
      isLoading: false,
      products: [],
      pagination: {}
    }
  },
  methods: {
    // 取得商品列表有page的API
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.products = response.data.products
          this.pagination = response.data.pagination
          this.isLoading = false
        }
      })
      document.documentElement.scrollTop = 0
    },
    // 進入單一產品細節
    goProduct (id) {
      this.$router.push(`/productPage/${id}`)
    },
    
  },
  created () {
    this.getProducts()
  }
}
</script>

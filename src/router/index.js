import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/foreground/Home.vue')
  },
  {
   path:'/products' ,
   name:'Products',
   component: () => import('../views/foreground/Products.vue'),
   children:[
    {
      path: '',
      name: 'Products',
      redirect: '/products/all'
    },
    {
      path: 'all',
      name: 'All',
      component: () => import('../views/foreground/productsPage/All.vue')
    },
    {
      path: 'rice',
      name: 'Rice',
      component: () => import('../views/foreground/productsPage/Rice.vue')
    },
    {
      path: 'noodle',
      name: 'Noodle',
      component: () => import('../views/foreground/productsPage/Noodle.vue')
    },
    {
      path: 'cuisine',
      name: 'Cuisine',
      component: () => import('../views/foreground/productsPage/Cuisine.vue')
    },
    {
      path: 'dessert',
      name: 'Dessert',
      component: () => import('../views/foreground/productsPage/Dessert.vue')
    }

   ]
  },
  {
    path:'/productPage/:id',
    name:'ProductPage',
    component: () => import('../views/foreground/ProductPage.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/foreground/Cart.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/foreground/Checkout.vue')
  },
  {
    path: '/checkoutPay/:orderId',
    name: 'CheckoutPay',
    component: () => import('../views/foreground/CheckoutPay.vue')
  },
  {
  path:'/about' ,
  name:'About',
  component: () => import('../views/foreground/About.vue'),
  }
  
]














const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

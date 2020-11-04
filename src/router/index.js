import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home
   },
   {
      path:'/login',
      name:'Login',
      component: () => import('../views/Login/Login.vue')
   },
   {
      path:'/restaurant',
      name:'Restaurant',
      component: () =>import('../views/Restaurant/Restaurant.vue')
   }
   ,
   {
      path:'/order',
      name:'Order',
      component: () =>import('../views/Order/Order.vue')
   },
   {

      path:'/menu/:restId',
      name:'Menu',
      component: () =>import('../views/Menu/Menu.vue')
   },

];

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
});

export default router;


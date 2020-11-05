import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      name: 'Home',
      redirect:'/restaurant'
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
      /* restId需要和传值的变量名一致 */
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

// 路由守卫 检测在未登录状态下进入非login和restaurant页面的话跳转restaurant
router.beforeEach((to,from,next) => {

   if(to.name != 'Login' && to.name != 'Restaurant' && to.name != 'Menu'){
      const isLogin = localStorage.getItem('user') || '';
      if(!isLogin){
         next({
            name:'Restaurant'
         });
      }else{
         next();
      }
   }else{
      next();
   }
});

export default router;


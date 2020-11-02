<template>
  <div class="header">
    <div class="left container-between vertical">
      <a href="http://localhost:8080/restaurant">
        <img
          class="logo"
          src="../../assets/logo.png"
          alt=""
        ></a>
    </div>
    <div
      class="profile"

      @click="handleProfile()"
    >
      <img
        class="profile-logo"
        src="../../assets/profile-icon.png"
        alt=""
      >
    </div>

    <!-- 未登陆profile -->
    <div
      ref="dropBox"
      class="profile-drop-down"
      :style="{display:isShow ? 'block' : 'none'}"
    >
      <button
        v-if="isLogin === false"
        class="profile-button order-btn"
        :style="{backgroundColor: '#fff',color: '#797979'}"
        @click="login"
      >
        登录
      </button>

      <button
        v-if="orderLogin === true"
        class="profile-button order-btn"
        @click="order"
      >
        历史订单
      </button>

      <div
        class="language-button"
      >
        <button
          :class="language === 'zh' ? 'on-choose' : ' '"
          @click="changeLanguage('zh')"
        >
          中
        </button>
        <button
          :class="language === 'us' ? 'on-choose' : ' '"
          @click="changeLanguage('us')"
        >
          En
        </button>
      </div>
      <button
        v-if="isLogout === true"
        class="profile-button log-out"
        @click="logout"
      >
        登出
      </button>
    </div>

    <!-- 登陆后profile -->
    <!-- <div
      class="profile-drop-down"
      :style="{display:isShow ? 'block' : 'none'}"
    >
      <button
        v-if="orderLogin === false"
        class="order-btn"
      >
        {{ $t("order.title") }}
      </button>
      <div
        class="language-button"
      >
        <button
          :class="language === 'zh' ? 'on-choose' : ' '"
          @click="changeLanguage('zh')"
        >
          中
        </button>
        <button
          :class="language === 'en' ? 'on-choose' : ' '"
          @click="changeLanguage('en')"
        >
          En
        </button>
      </div>
      <button class="profile-button log-out">
        登出
      </button>
    </div> -->
  </div>
</template>

<script>

import './Header.scss';
import { getStorage } from '../../common/utils';

export default {
   name:'Header',
   data (){
      return{
         isShow:false,
         language:'zh',
         /* 设置是否登陆状态属性 分别显示profile */
         isLogin:true,
         isLogout:false,
         /* 登陆后进入页面显示历史菜单 进入order隐藏历史菜单 */
         orderLogin:false
      };
   },
   created (){

   },
   methods:{
      /* 显示profile */
      handleProfile (){
         /* 取消事件默认行为 */
         //  e.preventDefault();
         this.isShow = true;
         /* 添加handleOut鼠标事件 */
         document.addEventListener('click', this.handleOut, true);
         console.log('isShow',this.isShow);
         console.log(this.$route.name);

         this.changeBox();

      },
      /* 鼠标移出操作元素外改变changestyle状态 */
      handleOut (e){

         const ref = this.$refs.dropBox;
         if (ref && !ref.contains(e.target)) {
            console.log('123');
            this.isShow = false;
            document.removeEventListener('click',this.handleOut,true);
         }
      },

      changeBox (){
         console.log('$route',this.$route);
         if(getStorage('user')){
            if(this.$route.name === 'Login' ){
               this.isLogin = false;
            }else if(this.$route.name === 'Restaurant'){
               this.orderLogin = true;
               this.isLogout = true;
            }else if(this.$route.name === 'Order'){
               this.isLogout = true;
            }else if(this.$route.name != 'Login' || this.$route.name != 'Restaurant' || this.$route.name != 'Order'){
               this.orderLogin = true;
               this.isLogout = true;
            }
         }else{
            this.isLogin = false;
         }
      },
      /* 切换语言按钮 */
      changeLanguage (v){
         this.$i18n.locale = v;
         this.language = v;
         console.log(this.language);
      },
      onblur (){
         this.isShow = false;
      },
      login (){
         this.$router.push({
            name:'Login'
         });
      },
      order (){
         this.$router.push({
            name:'Order'
         });
      },
      logout (){
         localStorage.removeItem('user');
         /* 移除改变状态 */
         //  this.changeBox();
         this.isLogin = false;
         this.isLogout = false;
         this.orderLogin = false;
      }
   }
};
</script>
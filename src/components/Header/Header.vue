<template>
  <div class="header">
    <div class="left container-between vertical">
      <img
        class="logo"
        src="../../assets/logo.png"
        alt=""
      >
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
    <!-- <div
      class="profile-drop-down"
      :style="{display:isShow ? 'block' : 'none'}"
    >
      <button class="profile-button order-btn">
        登录
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
    </div> -->

    <!-- 登陆后profile -->
    <div
      class="profile-drop-down"
      :style="{display:isShow ? 'block' : 'none'}"
    >
      <button
        v-if="orderLogin === false"
        class="order-btn"
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
      <button class="profile-button log-out">
        登出
      </button>
    </div>
  </div>
</template>

<script>
import './Header.scss';

/* globalstyle */
import '../../style/color.scss';
import '../../style/size.scss';
import '../../style/style.scss';

export default {
   name:'Header',
   data (){
      return{
         isShow:false,
         language:'zh',
         /* 设置是否登陆状态属性 分别显示profile */
         isLogin:false,
         /* 登陆后进入页面显示历史菜单 进入order隐藏历史菜单 */
         orderLogin:false
      };
   },
   methods:{
      /* 显示profile */
      handleProfile (){
         this.isShow = !this.isShow;
      },
      /* 切换语言按钮 */
      changeLanguage (v){
         this.language = v;
         console.log(this.language);
      },
      onblur (){
         this.isShow = false;
      }
   }
};
</script>
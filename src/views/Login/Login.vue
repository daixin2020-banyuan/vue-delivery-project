<template>
  <div>
    <Header></Header>
    <div class="header-children">
      <div class="center-box">
        <div>
          <div class="input-box login-input-box">
            <div class="input-Title">
              用户名
            </div>
            <div>
              <input
                v-model="username"
                class="input"
              />
            </div>
          </div>
          <div class="input-box login-input-box">
            <div class="input-Title">
              密码
            </div>
            <div>
              <input
                v-model="password"
                class="input"
                type="password"
              />
            </div>
          </div>
          <div class="login-btn-box container-col vertical">
            <button class="normal-btn login-btn">
              登陆
            </button>
            <button
              class="normal-btn sign-up-btn"
              @click="showModal"
            >
              注册
            </button>
          </div>
        </div>
      </div>
    </div>

    <regisModal></regisModal>
    <errorModal></errorModal>
  </div>
</template>

<script>

import Header from '../../components/Header/Header';

/* modal */
import regisModal from '../../components/modal/registModal/registModal';
import errorModal from '../../components/errorModal/ErrorModal';

/* style */
import '../../style/style.scss';
import './Login.scss';

export default {
   name: 'Login',
   components:{
      regisModal,
      errorModal,
      Header
   },

   data (){
      return{
         username:'',
         password:''
      };
   },
   methods:{
      showModal (){
         this.$modal.show('regist',{
            text: 'This text is passed as a property'
         }, {
            draggable: true,
            clickToClose: false,
         });

      }
   }

};

</script>


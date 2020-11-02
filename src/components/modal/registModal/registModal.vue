
<template>
  <modal
    name="regist"
    :width="600"
    :height="600"
  >
    <!-- <div class="container"> -->
    <div class="sign-up-modal container-col vertical space-between">
      <div class="sign-up-type-in">
        <div class="input-box sign-up-type-input">
          <div class="input-title">
            用户名
          </div>
          <input
            v-model="userName"
            class="input"
          />
        </div>
        <div class="input-box sign-up-type-input">
          <div class="input-title">
            密码
          </div>
          <input
            v-model="password"
            class="input"
            type="password"
          />
        </div>
        <div class="input-box sign-up-type-input">
          <div class="input-title">
            确认
          </div>
          <input
            v-model="confirmPassword"
            class="input"
            type="password"
          />
        </div>
        <div class="container-col vertical space-between sign-up-btn-box">
          <button
            class="normal-btn login-btn"
            @click="regist"
          >
            注册
          </button>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </modal>
</template>

<script>

import '../../../style/style.scss';
import './registModal.scss';
import { checkName,checkPassword,checkconfirmPassword } from '../../../common/utils.js';
import { mapActions } from 'vuex';

export default {
   name:'RegistModal',
   data (){
      return{
         userName:'',
         password:'',
         confirmPassword:''
      };
   },

   methods:{
      ...mapActions([ 'sendRegist' ]),
      errorModal (){
         this.$modal.show('errorshow',{
            text: 'This text is passed as a property'
         }, {
            draggable: true,
            clickToClose: false,
         });
      },

      regist (){
         if(!checkName(this.userName)){
            // this.errorModal();
            this.$modal.show('errorshow',);
         }
         let data = {
            username:this.userName,
            password:this.password

         };
         this.sendRegist(data);
      }

   },

};
</script>

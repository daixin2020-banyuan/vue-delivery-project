
<template>
  <modal
    name="regist"
    :width="600"
    :height="600"
  >
    <div class="sign-up-modal containerCol vertical space-between">
      <div class="sign-up-type-in">
        <div class="input-box sign-up-type-input">
          <div class="input-title">
            用户名
          </div>
          <input
            class="input"
            value
          />
        </div>
        <div class="input-box sign-up-type-input">
          <div class="input-title">
            密码
          </div>
          <input
            class="input"
            value
            type="password"
          />
        </div>
        <div class="input-box sign-up-type-input">
          <div class="input-title">
            确认
          </div>
          <input
            class="input"
            value
            type="password"
          />
        </div>
      </div>
      <div class="containerCol vertical space-between sign-up-btn-box">
        <button
          class="normal-btn login-btn"
          @click="errorModal"
        >
          注册
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
import '../../../style/color.scss';
import '../../../style/size.scss';
import '../../../style/style.scss';

export default {
   name:'RegistModal',

   data (){
      return{

      };
   },
   methods:{
      errorModal (){
         this.$modal.show('errorshow',{
            text: 'This text is passed as a property'
         }, {
            draggable: true,
            clickToClose: false,
         });

      }
   }

};
</script>

<style lang="scss">

.sign-up-type-in {
    height : 200px;
    margin-top : 100px;
}
.sign-up-type-input {
    margin-top : 50px;
}
.input-box {
    display : flex;
    flex-direction : row;
    justify-content : space-between;
}
.input-title {
    font-family : PingFangSC-Regular;
    font-size : 25px;
    font-style : normal;
    font-weight : 400;
    font-stretch : normal;
    line-height : 1.5;
    letter-spacing : normal;
}
.input {
    width : 300px;
    margin-left : 25px;
    line-height : 1.5;
    text-align : center!important;
    background-color : transparent;
    border-bottom : 2px solid #202020;
}
.sign-up-btn-box {
    margin-bottom : 50px;
}
.space-between {
    justify-content : space-between;
}
.vertical {
    align-items : center;
}
.containerCol {
    display : flex;
    flex-direction : column;
    margin-top : 100px;
    line-height : 10px;
}
.login-btn, .sign-up-btn {
    width : 300px;
    margin-top : 30px;
}
.normal-btn {
    height : 30px;
    padding : 5px 18px;
    font-size : 14px;
    color : #fff;
    background : #202020;
    border : 0;
    border-radius : 25px;
}
button {
    cursor : pointer;
    outline : none;
}
</style>

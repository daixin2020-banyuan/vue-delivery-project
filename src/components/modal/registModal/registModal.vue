
<template>
  <modal
    name="regist"
    :width="600"
    :height="600"
  >
    <div class="main">
      <div class="main-input">
        <div>用户名</div>
        <input class="registInput" />
      </div>
      <div class="main-input">
        <div>密码</div><input class="registInput" />
      </div>
      <div class="main-input">
        <div>确认</div><input class="registInput" />
      </div>
      <button @click="errorModal">
        注册
      </button>
    </div>
  </modal>
</template>

<script>

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
.main{
  padding :20px;
  margin-top :50px;
  margin-left :200px;
  .registInput{
    border-top :none;
    border-right :none;
    border-left :none;
    outline : none;
  }
  .main-input{
    display :flex;
  }

}

</style>

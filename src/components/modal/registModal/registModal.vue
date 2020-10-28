
<template>
  <modal name="regist">
    <div class="dasda">
      <div>
        用户名
        <input />
      </div>
      <div>密码<input /></div>
      <div>确认<input /></div>
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
            clickToClose: false
         });

      }
   }

};
</script>

<style lang="scss">
.dasda{
  margin-top :50px;
  margin-left :200px;
}
</style>

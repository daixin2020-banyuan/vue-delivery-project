
<template>
  <modal name="regist">
    <div class="dasda">
      <div>
        用户名
        <input />
      </div>
      <div>密码<input /></div>
      <div>确认<input /></div>
      <button @click="error">
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

};
</script>

<style lang="scss">
.dasda{
  margin-top :50px;
  margin-left :200px;
}
</style>

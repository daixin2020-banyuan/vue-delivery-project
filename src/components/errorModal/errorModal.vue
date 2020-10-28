<template>
  <modal name="errorshow">
    <div class="error-div">
      这是错误的
    </div>
  </modal>
</template>

<script>
export default {
   name: 'ErrorModal',
   data (){
      return{

      };
   },
};
</script>

<style lang="scss">
.error-div{
  margin-top :50px;
  margin-left :200px;
}
</style>
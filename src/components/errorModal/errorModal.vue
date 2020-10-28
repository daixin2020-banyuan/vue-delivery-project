<template>
  <modal
    name="errorshow"
    :width="300"
    :height="300"
  >
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
  width : 100px;
  height : 50px;
  margin-top :50px;
  margin-left :200px;
}
.vm--modal{
width : 100px;
  height : 50px;
}
</style>
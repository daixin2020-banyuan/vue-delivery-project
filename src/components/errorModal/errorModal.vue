<template>
  <modal
    name="errorshow"
    :height="120"
    :width="440"
    padding-left="30px"
  >
    <div class="error-div">
      {{ errorMes }}
      <button
        class="error-but"
        @click="$modal.hide('errorshow')"
      >
        关闭
      </button>
    </div>
  </modal>
</template>

<script>
export default {
   name: 'ErrorModal',
   data (){
      return{
         errorMes:''
      };
   },

};
</script>

<style lang="scss">

.error-div{
  display : flex;
  flex-direction :column;
  justify-content : center;
   width : 400px;
   height : 100px;
   padding :10px;
  text-align : center;
    .error-but{

        width : 64px;
        height : 30px;
        padding : 5px 18px;
        margin : 0 auto;
        margin-top : 30px;
        font-size : 14px;
        color : #fff;
        background : #202020;
        border : 0;
        border-radius : 25px;
        outline : none;
    }
}
.vm--modal{
width : 100px;
  height : 50px;
}
</style>
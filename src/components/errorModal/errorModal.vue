<template>
  <modal
    name="errorshow"
    :height="120"
    :width="440"
    padding-left="30px"
  >
    <div class="error-div">
      这是错误的!
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

      };
   },
  
};
</script>

<style lang="scss">

.error-div{
   width: 400px;
   height: 100px;
   padding:10px;
  text-align: center;
  display: flex;
  flex-direction:column;
  justify-content: center;
    .error-but{

        width: 64px;
        height: 30px;
        margin-top: 30px;
        padding: 5px 18px;
        font-size: 14px;
        color: #fff;
        background: #202020;
        border: 0;
        border-radius: 25px;
        margin: 0 auto;
        outline: none;
    }
}
.vm--modal{
width : 100px;
  height : 50px;
}
</style>
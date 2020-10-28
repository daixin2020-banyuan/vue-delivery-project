
<template>
  <div>
    <button @click="showModal">
      showModal
    </button>
  </div>
</template>

<script>

export default {
   data (){
      return{

      };
   },
   methods:{
      showModal (){
         this.$modal.show( {
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

</style>
<template>
  <div>
    <slot name="message" :status="status"></slot>
  </div>
</template>

<script>
export default {
  name: "Child",
  data(){
    return{
      status:{
        message:'1',
        total:'我是total'
      }
    }
  }
}
</script>

<style scoped>

</style>
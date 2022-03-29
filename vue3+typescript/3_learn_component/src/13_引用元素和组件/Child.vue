<template>
  <button @click="click">按钮</button>
</template>

<script>
export default {
  name: "Child",
  data(){
    return{
      childNum:0
    }
  },
  methods:{
    getNum(){
      console.log('child中的事件')
    },
    click(){
      console.log(this.$parent.$options);
      console.log(this.$root)
    }
  }
}
</script>

<style scoped>

</style>
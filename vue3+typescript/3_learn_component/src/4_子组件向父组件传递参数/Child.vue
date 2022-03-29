<template>
  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
  <div>
    <input type="number" v-model.number="num">
    <button @click="change">计算</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data(){
    return{
      num:0
    }
  },
  emits:['increase','decrease','changeNum'],//子组件传递的事件需要声明，不然会有警告
  methods:{
    increase(){
      this.$emit('increase')
    },
    decrease(){
      this.$emit('decrease')
    },
    change(){
      this.$emit('changeNum',this.num)
    }
  }
}
</script>

<style scoped>

</style>
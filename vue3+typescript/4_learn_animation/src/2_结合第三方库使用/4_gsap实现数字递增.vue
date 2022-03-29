<template>
  <input v-model="num1" @keydown.enter="change">
  <div>{{count.toFixed(0)}}</div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: "4_gsap实现数字递增",
  data(){
    return{
      count:0,
      num1:0
    }
  },
  watch:{
    count(newV){

    }
  },
  methods:{
    change(){
      gsap.to(this,{
        count:this.num1,
        duration:2
      })
    }
  }
}
</script>

<style scoped>

</style>
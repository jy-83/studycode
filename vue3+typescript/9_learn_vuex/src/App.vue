<template>
  <Home></Home>
  <hr>
  <div>{{count}}</div>
  <div>{{doubleCount}}</div>
  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
  <input type="num" v-model="num"> 
  <button @click="multiply">乘以</button>
</template>

<script>
import Home from '@/views/Home';
export default {
  components:{
    Home
  },
  data(){
    return{
      num:0
    }
  },
  computed:{
    count(){
      return this.$store.state.count;
    },
    doubleCount(){
      return this.$store.getters.doubleCount;
    }
  },
  methods:{
    increase(){
      this.$store.dispatch('increase');
    },
    decrease(){
      this.$store.commit('decrease');
    },
    multiply(){
      this.$store.commit('multiply',this.num)
    }
  }
  
}
</script>

<style>

</style>
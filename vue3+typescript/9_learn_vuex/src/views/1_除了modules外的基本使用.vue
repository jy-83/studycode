<template>
  <div>{{count}}</div>
  <div>{{doubleCount}}</div>
  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
  <input type="number" v-model="num">
  <button @click="multiply">乘以</button>
</template>

<script>
import { useStore } from "vuex";
import {computed,ref} from 'vue'
export default {
  setup(){
    const store=useStore();
    const num=ref(0)
    const count=computed(()=>{
      return store.state.count
    })
    const doubleCount=computed({
      get(){
        return store.getters.doubleCount
      }
    })
    const increase=()=>{
      store.commit('increase')
    }
    const decrease=()=>{
      store.commit('decrease')
    }
    const multiply=()=>{
      store.commit('multiply',num.value)
    }
    return{
      count,
      increase,
      decrease,
      doubleCount,
      num,multiply
    }
  }
}
</script>

<style>

</style>
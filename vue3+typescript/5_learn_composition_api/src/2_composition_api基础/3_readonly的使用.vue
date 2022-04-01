<template>
  <div>{{refReadonly}}</div>
  <div>{{refDome}}</div>
  <div>{{reactiveReadonly.name}}</div>
  <button @click="change">按钮</button>
</template>

<script>
import { ref, reactive,readonly } from 'vue';

export default {
  setup() {
    let refDome=ref(10);
    const reactiveDome=reactive({name:'蒋轶',age:26});
    let refReadonly=readonly(refDome);
    const reactiveReadonly=readonly(reactiveDome);
    const change=()=>{
      refReadonly.value=100;
      // refDome.value=100
    }
    return{
      refReadonly,
      reactiveReadonly,
      change,
      refDome
    }
  }
}
</script>

<style scoped>

</style>
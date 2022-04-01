<template>
  <div>{{name}}</div>
  <button @click="change">按钮</button>
</template>

<script>
import {computed, ref} from "vue";

export default {
  name: "1_computed的使用",
  setup(){
    let firstName=ref('蒋');
    let lastName=ref('轶');
    let name=computed({
        get(){
          return firstName.value+lastName.value
        },
        set(newVal){
          firstName.value=newVal[0];
          lastName.value=newVal.substring(1)
        }
    })
    const change=()=>{
      // firstName.value='周';
      // lastName.value='正雨'
      name.value='周正雨'
    }
    return{
      name,
      change
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div v-bind="$attrs">
    title:{{title}}
  </div>
  <ul>
    <li v-for="item in arr" :key="item">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "Child",
  props:{
    title:{
      type:String,
      required:true,
    },
    arr:{
      type:Array,
      default:()=>{
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
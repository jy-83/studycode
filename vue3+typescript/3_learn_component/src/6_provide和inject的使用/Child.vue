<template>
  <div>{{message}}</div>
  <div>{{total}}</div>
</template>

<script>
export default {
  name: "Child",
  inject:['message','total']
}
</script>

<style scoped>

</style>
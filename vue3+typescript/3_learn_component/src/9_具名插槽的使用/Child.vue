<template>
<div class="child">
  <div class="left">
    <slot name="left"></slot>
  </div>
  <div class="center">
    <slot name="cener"></slot>
  </div>
  <div class="right">
    <slot name="right"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "Right"
}
</script>

<style scoped>
.child{
  display: flex;
}
.left{
  width:80px;
  background:red;
}
.center{
  flex:1
}
.right{
  width:100px;
  background:blue;
}
</style>
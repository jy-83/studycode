<template>
  <button @click="show=!show">按钮</button>
  <transition name="jy" mode="out-in" appear>
    <div v-if="show">我是1</div>
    <div v-else>我是2</div>
  </transition>
</template>

<script>
export default {
  data(){
    return{
      show:true
    }
  }
}
</script>

<style scoped>
div{
  display: inline-block;
}
.jy-enter-from,
.jy-leave-to{
  opacity: 0;
}
.jy-enter-to,
jy-leave-from{
  opacity: 1;
}
.jy-enter-active,
.jy-leave-active{
  transition: all 1s ease
}
.jy-enter-active{
  animation: doubonse 1s ease;
}
.jy-leave-active{
  animation: doubonse 1s ease reverse;
}
@keyframes doubonse {
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(1.2);
  }
  100%{
    transform: scale(1);
  }
}
</style>
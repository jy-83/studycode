<template>
  <button @click="show=!show">显示/隐藏</button>
  <transition name="jy" >
    <div v-if="show" key="1" >元素</div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
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
div{
  display: inline-block;
}
.jy-enter-from,
.jy-leave-to{
  opacity: 0;
}
.jy-enter-to,.jy-leave-from{
  opacity: 1;
}
.jy-enter-active,
.jy-leave-active{
  transition:all 1s ease;
}
.jy-enter-active{
  animation: doubonse 1s ease;
}
.jy-leave-active{
  animation: doubonse 1s ease reverse;
}

</style>
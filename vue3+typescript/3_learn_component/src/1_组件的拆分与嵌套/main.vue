<template>
  <mainbanner></mainbanner>
  <mainlist></mainlist>
</template>

<script>
import mainbanner from "@/1_组件的拆分与嵌套/mainbanner";
import mainlist from "@/1_组件的拆分与嵌套/mainlist";

export default {
  name: "main",
  components: {
    mainbanner,
    mainlist
  }
}
</script>

<style scoped>

</style>
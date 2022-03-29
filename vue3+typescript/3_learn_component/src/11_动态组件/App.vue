<template>
  <button v-for="item in list" :key="item.type"  @click="current=item.type">{{item.name}} </button>
  <keep-alive exclude="Child">
    <component :is="current"></component>
  </keep-alive>
</template>

<script>
import child1 from "@/11_动态组件/Child1";
import child from "@/11_动态组件/Child";

export default {
  name: "App",
  data() {
    return {
      current:'child',
      list: [
        {
          name: '组件1',
          type: 'child',
        }, {
          name: '组件2',
          type: 'child1'
        }
      ]
    }
  },
  components: {
    child,
    child1
  }
}
</script>

<style scoped>

</style>
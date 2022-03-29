<template>
  <Header></Header>
  <Main></Main>
  <Footer></Footer>
</template>

<script>
import Header from "@/1_组件的拆分与嵌套/header";
import Footer from "@/1_组件的拆分与嵌套/footer";
import Main from "@/1_组件的拆分与嵌套/main";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    Main
  }
}
</script>

<style scoped>

</style>
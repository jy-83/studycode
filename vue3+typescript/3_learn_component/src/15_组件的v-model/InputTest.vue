<template>
  <input type="text" v-model="value">
</template>

<script>
export default {
  name: "hah ",
  emits:['update:modelValue'],
  props:{
    modelValue:{

    }
  },
  computed:{
    value:{
      set(value){
        this.$emit('update:modelValue',value)
      },
      get(){
        return this.modelValue
      }
    }
  }
}
</script>

<style scoped>

</style>
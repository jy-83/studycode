<template>
    <div>{{count}}</div>
    <div>{{name}}</div>
    <div>{{age}}</div>
    <div>{{doubleCount}}</div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
    <button @click="increasejy">+1</button>
</template>

<script>
import {useState,useGetters } from '@/hooks/index';
import { mapMutations,mapActions ,useStore} from 'vuex';
export default {
    setup () {
        const store=useStore();
        // state
        const state=useState(['count','name','age'])
        // state
        // state
        // getters
        const getters=useGetters(['doubleCount'])
        // getters
        // mutations
        const mutations=mapMutations(['increase','decrease'])
        // mutations
        // actions
        const actions=mapActions({
            'increasen':'increase'
        })
        const increasejy=()=>{
            const {increasen}=actions;
            let fn= increasen.bind({$store:store});
            fn().then(res=>{
                console.log(res)
            })
        }
        // actions
        return {
            ...state,
            ...getters,
            ...mutations,
            // ...actions
            increasejy
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
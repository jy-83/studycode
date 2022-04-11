<template>
    <div>{{count}}</div>
    <div>{{name}}</div>
    <div>{{age}}</div>
    <div>{{doubleCount}}</div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
    <button @click="increasePlaylod">+1</button>
</template>

<script>
import { mapState,useStore,mapGetters,mapMutations,mapActions } from "vuex";
import { computed } from "vue";
export default {
    setup () {
        const store=useStore();
        //mapState
        const stateFn=mapState(['count','name','age']);
        const state={};
        Object.keys(stateFn).forEach(key=>{
            state[key]=computed(stateFn[key].bind({$store:store}))
        })
        //mapState
        // mapGetters
        const getterFn=mapGetters(['doubleCount']);
        const getter={};
        Object.keys(getterFn).forEach(key=>{
            getter[key]=computed(getterFn[key].bind({$store:store}))
        })
        // mapGetters
        // mapMutations
        const mutations=mapMutations(['increase','decrease']);
        // mapMutations
        // mapActions
        const action=mapActions({
            'increasePlaylod':'increase'
        })
        // mapActions
        return {
            ...state,
            ...getter,
            ...mutations,
            ...action
        }
    }
}
</script>

<style>

</style>
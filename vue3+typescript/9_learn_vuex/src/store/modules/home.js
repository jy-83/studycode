const home={
    namespaced:true,
    state(){
        return{
            count:2
        }
    },
    getters:{
        doubleCount(state){
            return state*2
        }
    },
    mutations:{
        increase(state){
            state.count++;
        },
        increase(state){
            state.count--
        }
    }
}
export default home;
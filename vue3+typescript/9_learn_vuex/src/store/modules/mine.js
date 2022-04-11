const mine={
    namespaced:true,
    state(){
        return{
            count:1
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
export default mine;
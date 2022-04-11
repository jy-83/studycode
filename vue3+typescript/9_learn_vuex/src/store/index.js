import { createStore } from "vuex";
import home from './modules/home';
import mine from './modules/mine'
import axios from 'axios';

const store=createStore({
    state(){
        return{
            count:0,
            name:'蒋轶',
            age:26
        }
    },
    getters:{
        doubleCount(state){
            return state.count*2
        }
    },
    mutations:{
        increase(state){
            state.count++;
        },
        decrease(state){
            state.count--
        },
        multiply(state,playlod){
            state.count=playlod*state.count
        }
    },
    actions:{
        increase(context){
            setTimeout(()=>{
                context.commit('increase')
            },2000)
            return axios.get('http://localhost:8082/test').then(res=>{
                return Promise.resolve('哈哈哈')
            }).catch(err=>{
                return Promise.reject(err)
            })
        }
    },
    modules:{
        home,
        mine
    }
})
export default store;
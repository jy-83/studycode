import message from './js/message';
const {num}=require('./js/num');
import './js/element';
import './font/iconfont.css';
console.log(message);
console.log(num);
const arr=[1,2,3];
let arr1=arr.map(item=>{
    return item+1
})
console.log(arr1)
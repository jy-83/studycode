export  default {
    data(){
        return{
            message:'我是mixins'
        }
    },
    methods:{
        foo(){
            console.log('我是mixins里面的foo事件');
        }
    },
    created() {
        console.log('mixins里面的created');
        this.foo()
    }
}
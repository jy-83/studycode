import dayjs from "dayjs";

export function day(app) {
    let formatString='YYYY-MM-DD HH:mm:ss';
    app.directive('format-time', {
        mounted(el, binding) {
            let time=parseInt(el.textContent)
            if(el.textContent.length===10){
                time*=1000
            }
            if(binding.value){
                formatString=binding.value
            }
            el.textContent= dayjs(time).format(formatString)
        }
    })
}
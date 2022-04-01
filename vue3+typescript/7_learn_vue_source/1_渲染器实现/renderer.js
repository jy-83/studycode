const h=(tag,props,children)=>{
    return{
        tag,
        props,
        children
    }
}

const mount=(vnode,dom)=>{
    console.log(vnode)
    const el=document.createElement(vnode.tag);
    if(vnode.props){
        for(let i in vnode.props){
           let value=vnode.props[i];
           if(typeof value==='function'){
                el.addEventListener(i.substring(2).toLowerCase(),value)
           }else{
               el.setAttribute(i,value)
           }
        }
    }
    if(typeof vnode.children!=='string'){
        for(let i in vnode.children){
            mount(vnode.children[i],el)
        }
    }else{
        el.textContent=vnode.children
    }
    if(typeof dom==='string'){
        document.querySelector(dom).appendChild(el)
    }else{
        dom.appendChild(el)
    }
}
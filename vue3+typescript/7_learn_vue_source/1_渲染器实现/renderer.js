function h(tag,props,children){
    return{
        tag,
        props,
        children
    }
}

function mount(vnode,dom){
    const el=vnode.el=document.createElement(vnode.tag);
    //处理props
    if(vnode.props){
        for(let key in vnode.props){
            const value=vnode.props[key];
            if(key.startsWith('on')){
                el.addEventListener(key.slice(2).toLowerCase(),value)
            }else{
                el.setAttribute(key,value);
            }
        }
    }
    // 处理child
    if(vnode.children){
        if(typeof vnode.children==='string'){
            el.textContent=vnode.children;
        }else{
           vnode.children.forEach(item=>{
               mount(item,el);
           })
        }
    }
    if(typeof dom==='string'){
        document.querySelector(dom).appendChild(el)
    }else{
        dom.appendChild(el)
    }
}
// n1旧dom,n2新dom
function patch(n1,n2){
    // 1.比较标签
    if(n1.tag!==n2.tag){
        const elParent=n1.el.parentElement;
        elParent.removeChild(n1.el);
        mount(n2,elParent)
    }else{
        const el=n2.el=n1.el;
        // 处理props
        let oldProps=n1.props||{};
        let newProps=n2.props||{};
        // 添加新的props
        for(let key in newProps){
            let newValue=newProps[key];
            let oldValue=oldProps[key];
            if(newValue!==oldValue){
                if(key.startsWith('on')){
                    el.addEventListener(key.slice(2).toLowerCase(),newValue)
                }else{
                    el.setAttribute(key,newValue)
                }
            }
        }
        //删除旧的props
        for(let key in oldProps){
            if(key.startsWith('on')){
                el.removeEventListener(key,oldProps[key])
            }
            if(!(key in newProps)){
                el.removeAttribute(key)
            }
        }

        // 处理children
        let oldChildren=n1.children||[];
        let newChildren=n2.children||[];
        if( typeof newChildren==='string'){
            if(typeof oldChildren==='string'){
                if(newChildren!==oldChildren){
                    el.textContent=newChildren
                }
            }else{
                el.innerHTML=newChildren
            }
        }else{
            if(typeof oldChildren==='string'){
                el.innerHTML='';
                newChildren.forEach(item=>{
                    mount(item,el)
                })
            }else{
                const min=Math.min(oldChildren,newChildren);
                for(let i=0;i<min;i++){
                    patch(oldChildren[i],newChildren[i])
                }

                if(newChildren.length>oldChildren.length){
                    for(let i=min;i<newChildren.length;i++){
                        mount(newChildren[i])
                    }
                }
                if(newChildren.length<oldChildren.length){
                    for(let i=min;i<oldChildren.length;i++){
                        el.removeChild(oldChildren[i].el)
                    }
                }
            }
        }
    }
}

import '../css/title.css';
import '../css/tip.scss';
import '../css/bg.scss';
import imgsrc from '../img/zznh.png';
const divEl=document.createElement('div');
divEl.innerHTML='hello world';
divEl.className='title';
document.body.appendChild(divEl);
const spanEl=document.createElement('span');
spanEl.innerHTML='hello webpack';
spanEl.className='tip';
document.body.appendChild(spanEl);
const bgImg=document.createElement('div');
bgImg.className='bg-img';
document.body.appendChild(bgImg);
const img=document.createElement('img');
img.src=imgsrc;
document.body.appendChild(img);
const i=document.createElement('i');
i.className='iconfont icon-ceshi';
document.body.appendChild(i);
import '../css/bg.scss'
console.log(content.length)

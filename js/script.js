'use strict';

const btn=document.querySelector('header a');
const h1=document.querySelector('header h1');

let counter =0
btn.addEventListener('click',()=>{
    counter++;
    if (counter % 2!=0){
        h1.innerHTML='Zapraszamy do zapoznania się z Naszą ofertą';
    }else
    h1.innerHTML='Biuro podróży';
   
}) 
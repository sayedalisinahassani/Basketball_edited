const button1=document.querySelector('.button1');
const button2=document.querySelector('.button2');
const button3=document.querySelector('.button3');
const button4=document.querySelector('.button4');
const button5=document.querySelector('.button5');
const button6=document.querySelector('.button6');
const home_num=document.querySelector('.home_num');
const guest_num=document.querySelector('.guest_num');
const finished=document.querySelector('.finished');
const p=document.querySelector('.p');

let current_home=0;
let current_guest=0;
button1.addEventListener('click',function(){
    current_home+=1;
    home_num.innerHTML=current_home;
})
button2.addEventListener('click',function(){
    current_home+=2;
    home_num.innerHTML=current_home;
})
button3.addEventListener('click',function(){
    current_home+=3;
    home_num.innerHTML=current_home;
})
button4.addEventListener('click',function(){
    current_guest+=1;
    guest_num.innerHTML=current_guest;
})
button5.addEventListener('click',function(){
    current_guest+=2;
    guest_num.innerHTML=current_guest;
})
button6.addEventListener('click',function(){
    current_guest+=3;
    guest_num.innerHTML=current_guest;
})
finished.addEventListener('click',function(){
    if(current_home==current_guest){
        p.innerHTML='Both are equal';
    } else if(current_home>current_guest){
        p.innerHTML='Home is win';
    } else if(current_home<current_guest){
        p.innerHTML='Guest is win'
    }
})
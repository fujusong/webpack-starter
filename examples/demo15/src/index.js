import $ from 'jquery';

var style=require('./style/globalStyle.css'); 

$('#app').css('background','#0f0');



const newMessage=()=>(
`<div class="${style.box}">    
    DEV:${DEVELOPMENT.toString()}<br>    
    PRO:${PRODUCTION.toString()}<br>    
</div>`
);



var app=document.getElementById('app'); 

app.innerHTML=newMessage(); 

if(DEVELOPMENT){    
    if(module.hot){//启用热重载       
        module.hot.accept();    
}}
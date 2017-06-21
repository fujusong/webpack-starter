import icon from './Icon'; 
import img from './Img'; 


var messages=require('./message');
var newMessage = ()=>('<p>'+messages.data +' -From '+ messages.event+"</p>");
var newMessage2=()=>(
    `<p>${icon} ${img}</p>`
); 

var app=document.getElementById('app'); 
app.innerHTML=newMessage(); 
app.innerHTML+=newMessage2();

if(module.hot){//启用热重载 
	module.hot.accept();
}
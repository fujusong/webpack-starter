var messages=require('./message');
var newMessage = ()=>('<p>'+messages.data +' -From '+ messages.event+"</p>");
var app=document.getElementById('app'); 
app.innerHTML=newMessage(); 

if(module.hot){//启用热重载 
	module.hot.accept();
}
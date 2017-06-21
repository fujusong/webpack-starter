import Button from './button';  

var newMessage = ()=>(Button.button);


var app=document.getElementById('app'); 
app.innerHTML=newMessage(); 
Button.attachEl();

if(module.hot){//启用热重载 
	module.hot.accept();
}
var messages=require('./message');

var app=document.getElementById('app'); 
app.innerHTML = messages.data+" -From "+ messages.event;

if(module.hot){//启用热重载 
	module.hot.accept();
}
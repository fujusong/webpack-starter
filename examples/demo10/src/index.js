var newMessage = ()=>{
	return `DEV:${DEVELOPMENT.toString()} <br> PRO:${PRODUCTION.toString()}`;
}


var app=document.getElementById('app'); 
app.innerHTML=newMessage(); 

if(DEVELOPMENT){ 
	if(module.hot){//启用热重载 
		module.hot.accept();
	}
}
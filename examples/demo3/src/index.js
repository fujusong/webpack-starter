var messages=require('./message');

var app=document.getElementById('app'); 
app.innerHTML = messages.data+" -From "+ messages.event;
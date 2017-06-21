var app=document.getElementById('app');
app.innerHTML=`    
    <div id="menu">        
        <button id="loadPage1">Load1</button>        
        <button id="loadPage2">Load2</button>    
    </div>    
    <div id="content">        
        <h1>home</h1>    
    </div>`;
document.getElementById('loadPage1').addEventListener('click',()=>{
//System.import 会令每个可能的模块都产生一个独立的块（chunk）。    
System.import('./page1').then(pageModule=>{        
    document.getElementById('content').innerHTML=pageModule.default;    
})
});
document.getElementById('loadPage2').addEventListener('click',()=>{    
System.import('./page2').then(pageModule=>{        
    document.getElementById('content').innerHTML=pageModule.default;    
})
});

if(DEVELOPMENT){    
    if(module.hot){//启用热重载       
        module.hot.accept();    
}}
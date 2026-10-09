const {app,BrowserWindow}=require('electron');
function create(){
  const w=new BrowserWindow({width:1000,height:800,autoHideMenuBar:true,icon:__dirname+'/icon-512.png',title:'Hissab Nama'});
  w.loadFile('index.html');
}
app.whenReady().then(create);
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});

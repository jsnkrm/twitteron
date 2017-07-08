var electron = require('electron')

electron.app.on('ready', function(){
    let win = new electron.BrowserWindow({width:520, height:445, frame:false, transparent:true,type:'desktop'})
    win.loadURL('file://' + __dirname + '/index.html')

    win.on('resize',updateSize)
  
    function updateSize(){
        
    }
})

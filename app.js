var electron = require('electron')

electron.app.on('ready', function(){
    let win = new electron.BrowserWindow({width:470, height:580, frame:false, transparent:true})
    win.loadURL('file://' + __dirname + '/index.html')

    win.on('resize',updateSize)
  
    function updateSize(){
        
    }
})

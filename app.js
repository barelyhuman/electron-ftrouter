const { app, BrowserWindow } = require('electron')
const path = require('path');
const {spawn} = require('child_process');


let routexProcess;

function createRoutexProcess(){
    const process = spawn('npx',['routex','--dir', '/server/routes']);


        process.stdout.on('data',(data)=>{
            console.log(Buffer.from(data).toString());
        })

        process.stderr.on('data',(data)=>{
            console.error(Buffer.from(data).toString());
        });


    return process;
}

function createWindow () {
  // Create the browser window.
  routexProcess = createRoutexProcess();
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile(path.join('client','index.html'));
}



app.on('window-all-closed', () => {
    routexProcess.kill('SIGINT');

    if (process.platform !== 'darwin') {
      app.quit()
    }
  });
  

app.whenReady().then(createWindow)

const {app, BrowserWindow} = require('electron');

require('@electron/remote/main').initialize()

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 1100,
        height: 700,
        icon: __dirname + "./discord.png",
        webPreferences: {
            enableRemoteModule: true
        }
    });

    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools();
    win.setMenu(null)
    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
})
app.on('activate', ()=>{
    if (BrowserWindow.getAllWindows().length === 0 ) createWindow()
})

const { app, BrowserWindow } = require('electron')
const path = require('path')
const { autoUpdater } = require('electron-updater')
const log = require('electron-log');

// Definiedo donde queremos que se guarden nuestro logs
log.transports.file.resolvePath = () => path.join('/home/fenomatch/auto-update-electron', 'logs/main.log')

log.info('Hola, log');
log.warn('Some problem appears');

let win;
function createWindow() {
    // Crea la ventana
    win = new BrowserWindow({
        width: 300, 
        height: 400
    });

    // Carga el archivo index.html dentro de la ventana
    win.loadFile(path.join(__dirname,'index.html'))
}

// Evento que se llama cuando inicia la aplicacion
app.on('ready', () => {
    // Llama al metodo que crea la ventana junto la interfaz
    createWindow()
    
    // Verifica y notifica al usuario si hay actualizaciones
    autoUpdater.checkForUpdatesAndNotify();
})

autoUpdater.on("update-available", () => {

    log.info("update-available");

})

autoUpdater.on("checking-for-update", () => {

    log.info("checking");

})

autoUpdater.on("download-progress", () => {

    log.info("download-progress");

})

autoUpdater.on("update-downloaded", () => {

    log.info("update-downloaded");

})
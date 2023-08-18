import { app, BrowserWindow, ipcMain } from 'electron';
import path from "path";

require("electron-reload")(__dirname);

let mainWindow: BrowserWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            //nodeIntegration: true,
            contextIsolation: true,
        },
        show: false,
        minWidth: 450
    });
    mainWindow.loadURL(path.join(__dirname, "www", "index.html"));
}

app.on('ready', () => {
    app.name = "Structure Creator";
    createWindow();
    mainWindow.maximize();
    mainWindow.show();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
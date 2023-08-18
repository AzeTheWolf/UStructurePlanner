import { app, BrowserWindow } from 'electron';
import path from "path";

require("electron-reload")(__dirname);

let mainWindow = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 854,
        height: 480,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
        }
    });
    mainWindow.loadURL(path.join(__dirname, "www", "index.html"));
}

app.on('ready', () => {
    app.name = "Structure Creator";
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
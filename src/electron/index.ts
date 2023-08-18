import { app, BrowserWindow, ipcMain } from 'electron';
import path from "path";
import * as remote from "./remoteFunctions";
import appMenu from './appMenu';

require("electron-reload")(__dirname);

let mainWindow: BrowserWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            //nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, "preload.js")
        },
        show: false,
        minWidth: 450
    });
    mainWindow.loadURL(path.join(__dirname, "www", "index.html"));
    mainWindow.setMenu(appMenu)
}

app.on('ready', () => {
    ipcMain.handle('system:getElectronInfo', remote.getSystemInfo);

    createWindow();
    mainWindow.maximize();
    mainWindow.show();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
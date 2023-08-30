import { contextBridge, ipcRenderer } from "electron";
import * as crypto from 'crypto';

contextBridge.exposeInMainWorld("syslink", {
    getElectronData: () => ipcRenderer.invoke('system:getElectronInfo'),
    getRandom10bitID: () => crypto.randomInt(2**10),
});
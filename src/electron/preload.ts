import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("syslink", {
    getElectronData: () => ipcRenderer.invoke('system:getElectronInfo')
})
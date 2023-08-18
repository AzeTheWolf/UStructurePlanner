/// <reference types="svelte" />


export interface ISyslinkAPI {
    getElectronData: () => Promise<{ chrome: string, electron: string, node: string, app: string }>
}

declare global {
    interface Window {
        syslink: ISyslinkAPI
    }
}
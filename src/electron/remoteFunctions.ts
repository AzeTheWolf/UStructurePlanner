function getSystemInfo() {
    return {
        node: process.versions.node,
        electron: process.versions.electron,
        chrome: process.versions.chrome,
        app: "0.0.1"
    }
}

export {
    getSystemInfo
}
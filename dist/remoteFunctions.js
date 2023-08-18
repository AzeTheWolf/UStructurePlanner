"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSystemInfo = void 0;
function getSystemInfo() {
    return {
        node: process.versions.node,
        electron: process.versions.electron,
        chrome: process.versions.chrome,
        app: "0.0.1"
    };
}
exports.getSystemInfo = getSystemInfo;

import { Menu } from "electron";

export default Menu.buildFromTemplate([
    {
        label: "File",
        submenu: [
            {
                label: "Open",
                accelerator: "Ctrl+O"  
            },
            {
                label: "Save",
                accelerator: "Ctrl+S"  
            },
            {
                label: "Save as",
                accelerator: "Ctrl+Shift+S"  
            },
            {
                type: "separator"
            },
            {
                label: "Exit",
                role: "close",
            }
        ]
    },
    {
        label: "Window",
        submenu: [
            {
                label: "Reload UI",
                role: "reload",
                accelerator: "Ctrl+Shift+R"
            },
            {
                role: "toggleDevTools"
            }
        ]
    }
]);
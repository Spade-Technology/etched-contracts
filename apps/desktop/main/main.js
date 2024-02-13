"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const electron_1 = require("electron");
const electron_serve_1 = __importDefault(require("electron-serve"));
const helpers_1 = require("./helpers");
const isProd = process.env.NODE_ENV === "production";
if (isProd) {
    (0, electron_serve_1.default)({ directory: "app" });
}
else {
    electron_1.app.setPath("userData", `${electron_1.app.getPath("userData")} (development)`);
}
(async () => {
    await electron_1.app.whenReady();
    const mainWindow = (0, helpers_1.createWindow)("main", {
        width: 1000,
        height: 600,
        webPreferences: {
            preload: path_1.default.join(__dirname, "preload.js"),
        },
    });
    if (isProd) {
        await mainWindow.loadURL("app://./home");
    }
    else {
        // const port = process.argv[2] || 3000;
        await mainWindow.loadURL(`http://localhost:3000?electron=true`);
        mainWindow.webContents.openDevTools();
    }
})();
electron_1.app.on("window-all-closed", () => {
    electron_1.app.quit();
});
electron_1.ipcMain.on("message", async (event, arg) => {
    event.reply("message", `${arg} World!`);
});

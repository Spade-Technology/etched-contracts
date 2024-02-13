import path from "path";
import { app, ipcMain } from "electron";
import { createWindow } from "./helpers";

const isProd = process.env.NODE_ENV === "production";

(async () => {
  await app.whenReady();

  const mainWindow = createWindow("main", {
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  await mainWindow.loadURL(`http://localhost:3000/auth?electron=true`);
  if (!isProd) {
    mainWindow.webContents.openDevTools();
  }
})();

app.on("window-all-closed", () => {
  app.quit();
});

ipcMain.on("message", async (event, arg) => {
  event.reply("message", `${arg} World!`);
});

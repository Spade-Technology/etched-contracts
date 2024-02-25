import path from "path";
import { app, ipcMain, session, shell } from "electron";
import { createWindow } from "./helpers";

const isProd = process.env.NODE_ENV === "production";

(async () => {
  await app.whenReady();

  if (process.defaultApp) {
    if (process.argv.length >= 2) {
      app.setAsDefaultProtocolClient("foorier", process.execPath, [
        path.resolve(process.argv[1]),
      ]);
    }
  } else {
    app.setAsDefaultProtocolClient("foorier");
  }

  const mainWindow = createWindow("main", {
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  await mainWindow.loadURL(`http://localhost:3000/auth?electron=true`);
  // await mainWindow.loadURL(`https://etched.xyz/auth?electron=true`);
  if (!isProd) {
    mainWindow.webContents.openDevTools();
  }

  const gotTheLock = app.requestSingleInstanceLock();

  if (!gotTheLock) {
    app.quit();
  } else {
    app.on("second-instance", async (_, commandLine, __) => {
      console.log("MAMA: ", {
        _,
        commandLine,
        __,
      });
      const jwtRegex = /\[([^\]]+)\]/;
      const match = commandLine[2].match(jwtRegex);
      if (!match) return;
      const extractedJwt = match[1];

      // Someone tried to run a second instance, we should focus our window.
      if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore();
        mainWindow.focus();
      }

      const cookie = {
        url: "http://localhost:3000/dashboard",
        // url: "https://etched.xyz/dashboard",
        name: "__clerk_db_jwt",
        value: extractedJwt,
      };
      session.defaultSession.cookies.set(cookie).then(
        () => {},
        (error) => {
          console.error(error);
        }
      );
      cookie.name = "__client_uat";
      cookie.value = parseInt(`${Date.now() / 1000}`).toString();

      session.defaultSession.cookies.set(cookie).then(
        () => {},
        (error) => {
          console.error(error);
        }
      );
      await mainWindow.webContents.executeJavaScript(
        `localStorage.setItem("clerk-db-jwt", "${extractedJwt}")`
      );
      await mainWindow.loadURL(`http://localhost:3000/auth?electron=true`);
      // await mainWindow.loadURL(`https://etched.xyz/auth`);
    });
  }

  mainWindow.webContents.on("did-redirect-navigation", async (event) => {
    const url = new URL(event.url);
    const newUrl = new URL(
      "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount"
    );
    newUrl.searchParams.set(
      "access_type",
      url.searchParams.get("access_type") || ""
    );
    newUrl.searchParams.set(
      "client_id",
      url.searchParams.get("client_id") || ""
    );
    newUrl.searchParams.set(
      "redirect_uri",
      url.searchParams.get("redirect_uri") || ""
    );
    newUrl.searchParams.set(
      "response_type",
      url.searchParams.get("response_type") || ""
    );
    newUrl.searchParams.set("scope", url.searchParams.get("scope") || "");
    newUrl.searchParams.set("state", url.searchParams.get("state") || "");

    event.preventDefault();
    shell.openExternal(newUrl.href);
    await mainWindow.loadURL(`http://localhost:3000/auth?electron=true`);
  });
})();

app.on("window-all-closed", () => {
  app.quit();
});

// app.on("open-url", (event, url) => {});

ipcMain.on("message", async (event, arg) => {
  event.reply("message", `${arg} World!`);
});

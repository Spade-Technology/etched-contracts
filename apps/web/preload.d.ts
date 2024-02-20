import { IpcHandler } from "@/utils/preload";

declare global {
  interface Window {
    ipc: IpcHandler;
  }
}

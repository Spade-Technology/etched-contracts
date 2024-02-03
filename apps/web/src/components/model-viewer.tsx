import { useEffect, useState } from "react";
import Unity, { UnityContent } from "react-unity-webgl";

declare global {
  interface Window {
    filedata: { [key: string]: any };
  }
}

export default function ModelViewer({ file, fileName }: { file: string; fileName: string }) {
  const [ready, setReady] = useState(false);
  const [unityContent, setUnityContent] = useState<UnityContent>();

  useEffect(() => {}, []);

  useEffect(() => {
    const _unityContent = new UnityContent("/model-viewer/build.json", "/model-viewer/UnityLoader.js", {
      adjustOnWindowResize: true,
    });

    if (!_unityContent) return;

    _unityContent.on("canvas", function (canvas: any) {
      canvas.width = "100%";
      canvas.height = "50%";
    });

    _unityContent.on("Ready", () => {
      setReady(true);
      loadFile();
    });
    _unityContent.on("OnLoaded", () => {
      try {
      } catch {}
    });
    _unityContent.on("OnError", (e: any) => {
      console.error(e);
    });

    setUnityContent(_unityContent);
  }, []);

  useEffect(() => {
    if (ready) loadFile();
    return () => {
      unityContent?.remove();
    };
  }, [file]);

  const loadFile = async () => {
    if (!unityContent) return;

    try {
      if (file && fileName) {
        var reader = new FileReader();
        reader.onload = (function () {
          return function (e) {
            (window.filedata = window.filedata ? window.filedata : {})[fileName] = e?.target?.result;
            unityContent.send("root", "FileUpload", fileName);
          };
        })();
        reader.readAsArrayBuffer(await fetch(file).then((data) => data.blob()));
      } else {
        unityContent.send("root", "Clear");
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (!unityContent) return;

  return <Unity unityContent={unityContent} />;
}

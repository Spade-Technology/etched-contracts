import { useEffect, useState } from "react";
import Unity, { UnityContent } from "react-unity-webgl";

const unityContent = new UnityContent("/Build/build.json", "/Build/UnityLoader.js", {
  adjustOnWindowResize: true,
});

export default function Viewer(props: any) {
  const [ready, setReady] = useState(false);
  const [fileName, setFileName] = useState(null);

  unityContent.on("canvas", function (canvas: any) {
    canvas.width = "100%";
    canvas.height = "50%";
  });

  unityContent.on("Ready", () => {
    setReady(true);
    loadFile();
  });

  unityContent.on("OnLoaded", () => {
    try {
      console.log("huugyf");
      console.log(props.file);
    } catch {}
  });

  unityContent.on("OnError", () => {
    try {
    } catch {}
  });

  useEffect(() => {
    if (ready) loadFile();
    return () => {
      unityContent.remove();
    };
  }, [props.file]);

  const loadFile = () => {
    try {
      if (props.file && typeof props.file == "object") {
        var reader = new FileReader();
        reader.onload = (function (file) {
          return function (e) {
            (window.filedata = window.filedata ? window.filedata : {})[file.name] = e.target.result;
            unityContent.send("root", "FileUpload", file.name);
            setFileName(file.name);
          };
        })(props.file);
        reader.readAsArrayBuffer(props.file);
      } else if (typeof props.file == "string") {
        unityContent.send("root", "Load", JSON.stringify({ file: props.file }));
        setFileName(props.file);
      } else {
        unityContent.send("root", "Clear");
        setFileName("");
      }
    } catch (e) {
      console.log(e);
      if (typeof props.onError == "function") props.onError();
    }
  };

  return <Unity unityContent={unityContent} />;
}

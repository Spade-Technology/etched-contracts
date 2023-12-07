import React, { useEffect, useState } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import { makeStyles } from "@material-ui/core/styles";

const unityContent = new UnityContent("/Build/build.json", "/Build/UnityLoader.js", {
  adjustOnWindowResize: true,
});

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     height: "100%",
//   },
//   unityContent: {
//     background: "white",
//     width: "100%",
//     height: "100%",
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

export default function Viewer(props) {
  const classes = "";
  const [ready, setReady] = useState(false);
  const [fileName, setFileName] = useState(null);

  unityContent.on("Ready", () => {
    setReady(true);
    loadFile();
    if (typeof props.onReady == "function") props.onReady();
  });

  unityContent.on("OnLoaded", () => {
    try {
      console.log("huugyf");
      console.log(props.file);
      if (typeof props.onLoaded == "function") props.onLoaded();
    } catch {}
  });

  unityContent.on("OnError", () => {
    try {
      if (typeof props.onError == "function") props.onError();
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

  return (
    <div className={"h-sreen w-[900px]"}>
      <Unity
        unityContent={unityContent}
        style={{
          height: "100%",
          width: 950,
          border: "2px solid black",
          background: "grey",
        }}
        className={"bg-primary"}
      />
    </div>
  );
}

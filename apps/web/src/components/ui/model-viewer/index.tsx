import React, { useEffect, useState, Suspense, useRef } from "react";

import dynamic from "next/dynamic";
import { toast } from "../../ui/use-toast";

const Viewer = dynamic(() => import("./Viewer"), { ssr: false });

export default function App() {
  const [fileFormat, setFileFormat] = useState("fbx");
  const [file, setFile] = React.useState("http://localhost:3000/3d/M08.glb");

  const onViewerReady = () => {
    console.log("");
  };

  const onViewerLoaded = () => {
    toast({
      title: "success",
      description: "Model loaded with success",
      variant: "success",
    });
  };

  const onViewerError = () => {
     toast({
       title: "error An error has occurred",
       description: "If you are trying to load a model, could you please email it to me at rufus31415@gmail.com ?",
       variant: "destructive",
     });
  };

  
  return (
    <article className="h-screen">
      <input type="file" onChange={(e: any) => setFile(e.target.files[0])} />
      
      <Viewer file={file} onReady={onViewerReady} onLoaded={onViewerLoaded} onError={onViewerError} />
    </article>
  );
}

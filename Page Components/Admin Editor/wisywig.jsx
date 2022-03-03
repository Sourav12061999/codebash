import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { Editor } from "react-draft-wysiwyg";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);
function Wisywig() {
  return (
    <div>
      <Editor
        toolbarClassName={"wysiwig-toolbar"}
        editorClassName={"wysiwig-editor"}
      />
    </div>
  );
}

export default Wisywig;

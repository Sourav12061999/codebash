import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { Editor } from "react-draft-wysiwyg";
import dynamic from "next/dynamic";
import { Button } from "@mui/material";
import { MdDone } from "react-icons/md";
import { EditorState } from "draft-js";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);
function Wisywig() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  console.log(Editor.createEmpty);
  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName={"wysiwig-toolbar"}
        editorClassName={"wysiwig-editor"}
        onEditorStateChange={(editorState) => {
          setEditorState(editorState);
        }}
      />
      <div style={{ width: "100px", margin: "10px auto" }}>
        <Button variant="contained" startIcon={<MdDone />}>
          Publish
        </Button>
      </div>
    </div>
  );
}

export default Wisywig;

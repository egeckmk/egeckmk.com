import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor({ content, handleOnChangeContent }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      // [{ font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  };
  return (
    <ReactQuill
      className="dark:text-white"
      theme="snow"
      value={content}
      onChange={handleOnChangeContent}
      placeholder="Please enter content"
      modules={modules}
    />
  );
}

export default Editor;

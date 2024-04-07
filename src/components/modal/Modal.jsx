import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CodeMirror from "@uiw/react-codemirror";
import { html as HTML } from "@codemirror/lang-html";
import { css as CSS } from "@codemirror/lang-css";
import ModalHeader from "./ModalHeader";
import { color } from "@uiw/codemirror-extensions-color";
import { javascript } from "@codemirror/lang-javascript";

const Modal = ({
  setShowModal,
  data,
  setData,
  sameOwner,
  activeData,
  setActiveData,
  setHtml,
  setCss,
  setJs,
}) => {
  useEffect(() => {
    if (window.location.href.includes("newProject")) sameOwner = true;
  });

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className={`absolute z-[100] h-full w-full   bg-[rgba(0,0,0,.6)] flex items-center justify-center`}
    >
      <div className="h-full w-[85%] bg-primary text-white shadow-[0_35px_80px_10px_rgba(255,255,255,0.4)] flex flex-col">
        <ModalHeader
          setShowModal={setShowModal}
          activeData={activeData}
          setActiveData={setActiveData}
        />
        <div className="bg-green-400 h-full w-fulll flex-1 overflow-hidden">
          <CodeMirror
            extensions={
              (activeData == "html" && [HTML({ matchClosingTags: true })]) ||
              (activeData == "css" && [CSS(), color]) ||
              (activeData == "js" && [javascript({ snippets: true })])
            }
            theme={"dark"}
            editable={sameOwner}
            height="100%"
            style={{ scrollbarColor: "green" }}
            className="h-full w-full bg-black overscroll-auto"
            onChange={(value, viewUpdate) => {
              activeData == "html" && setHtml(value);
              activeData == "css" && setCss(value);
              activeData == "js" && setJs(value);
            }}
            value={data[`${activeData}`]}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;

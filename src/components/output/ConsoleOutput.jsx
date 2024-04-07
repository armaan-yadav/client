import React, { useEffect, useState } from "react";

const ConsoleOutput = ({ js_edit, style }) => {
  const [displayCode, setDisplayCode] = useState("");

  useEffect(() => {
    let capturedOutput = "";

    const originalLog = console.log;
    console.log = function (message) {
      capturedOutput += message + "\n";
      originalLog.apply(console, arguments);
    };

    const code = `
          ${js_edit}
        `;

    try {
      eval(code);
    } catch (error) {
      console.error("Error during code execution:", error);
    } finally {
      setDisplayCode(capturedOutput);
    }
  }, [js_edit]);
  return (
    <div className={`${style}`}>
      <pre>{displayCode}</pre>
    </div>
  );
};

export default ConsoleOutput;

// ! Create a Show/Hide Text app using useState to manage the visibility a text message. A button should toggle between 'SHow' and 'Hide' text. When the text is visible, It should say: "Hello React Learner". When hidden nothing should be displayed.

import React, { useState } from "react";

const ToggleText = () => {
  const [text, setText] = useState(null);
  console.log(text);

  function toggleBtn() {
    {
      text === null && setText("Hello, React Learners.");
    }

    {
      text !== null && setText(null);
    }
  }

  return (
    <div
      style={{
        border: "2px solid goldenrod",
        borderRadius: "10px",
        marginTop: "10px",
      }}
    >
      <h5>Show/ Hide Text App</h5>

      <h3 style={{ color: "red" }}>{text}</h3>
      <button onClick={toggleBtn}>SHow/ Hide</button>
    </div>
  );
};

export default ToggleText;

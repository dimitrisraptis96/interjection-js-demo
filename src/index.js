import React, { useState } from "react";
import ReactDOM from "react-dom";
import generate from "interjection-js";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import "./styles.css";

function App() {
  const [interjection, setInterjection] = useState("");

  return (
    <div className="App">
      <h1 className="title">Interjection.js</h1>
      <p>
        {interjection !== "" ? (
          <>
            <b>{generate()}!</b> You're awesome!
          </>
        ) : (
          "😓"
        )}
      </p>
      <AwesomeButton onPress={() => setInterjection(generate())}>
        Make me feel special!
      </AwesomeButton>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

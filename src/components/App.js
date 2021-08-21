import React, {useState} from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";
//import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <DarkModeWrapper darkMode={darkMode} setDarkMode={setDarkMode}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;

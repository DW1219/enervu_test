import React from 'react';
import { Route, Switch } from "react-router-dom";
import AnimationTestPage from "./views/AnimationTestPage/AnimationTestPage.js";
//import TestPage from "./views/AnimationTestPage/TestPage.js";
import DrawingPage from "./views/AnimationTestPage/DrawingPage.js";
import TestTest from "./views/AnimationTestPage/TestTest.js";

function App() {
  return (
    <div>

          <Route exact path="/" component={AnimationTestPage} />

    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./Form/introduction";

import Main from "./Form/main";
import Primary from "./Form/primary";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Primary />} />
        <Route path="/History" element={<Introduction />} />
        <Route path="/Question1" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;

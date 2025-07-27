import "./App.css";
import Home from "./screen/Home";
import Login from "./screen/Login";
import SignUp from "./screen/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Correct bootstrap-dark-5 import
import "bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<SignUp></SignUp>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

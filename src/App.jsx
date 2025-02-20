import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainDash from "./pages/MainDash";
import SingleSol from "./pages/SingleSol";

export const AuthContext = createContext();

function App() {
  const [isAutenticated, setAutenticated] = useState(false);
  const userName = "admin";
  const password = "password";
  return (
    <>
      <Router>
        <div className="App">
          <AuthContext.Provider
            value={{ isAutenticated, userName, password, setAutenticated }}
          >
            <Routes>
              <Route
                path="/"
                element={isAutenticated ? <MainDash /> : <LoginPage />}
              />
              <Route
                path="/SingleSol"
                element={isAutenticated ? <SingleSol /> : <LoginPage />}
              />
              {/* <Route path="/" element={<MainDash />} />
              <Route path="/SingleSol" element={<SingleSol />} />
              <Route path="*" element={<LoginPage />} /> */}
            </Routes>
          </AuthContext.Provider>
        </div>
      </Router>
    </>
  );
}

export default App;

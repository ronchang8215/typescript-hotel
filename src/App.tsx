import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogInPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LogInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;

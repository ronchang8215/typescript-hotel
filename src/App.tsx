import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LogInPage from "./pages/logInPage";
import SignUpPage from "./pages/signUpPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<LogInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

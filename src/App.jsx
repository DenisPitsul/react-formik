import { Navigate, Route, Routes } from "react-router-dom";
import BasePage from "./pages/BasePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BasePage />}>
        <Route index element={<Navigate to="sign-in" />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;

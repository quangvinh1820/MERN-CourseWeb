import Dashboard from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPW from "./pages/ForgotPassword";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgot-password" element={<ForgotPW/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
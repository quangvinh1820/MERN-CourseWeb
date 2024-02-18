import Dashboard from "./pages/Home";
import Login from "./pages/Login";
import ForgotPW from "./pages/ForgotPassword";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Create from "./pages/Create";
import { useSelector } from "react-redux";

const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isAdmin = currentUser ? currentUser.isAdmin : false;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={!isAdmin ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/forgot-password"
          element={<ForgotPW />}
        />
        <Route
          path="/"
          element={
            isAdmin ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" />
            )
          }
        />
        {isAdmin && (
          <Route path="/create" element={<Create />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

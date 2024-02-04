import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import TestimonialPage from "./pages/TestimonialPage";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import Cart from "./pages/CartPage/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
//Const
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/team" element={<TeamPage/>}/>
        <Route path="/testimonial" element={<TestimonialPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/courses/:id" element={<DetailPage/>}/>
        <Route path="/cart/:id" element={<Cart/>}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
// import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";
import Logout from "./Components/Logout/Logout";
import SignUp from "./Components/SignUp/SignUp";
import Footer from "./Footer/Footer";
import BookChef from "./Components/BookChef/BookChef";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/chef-booking" element={<BookChef />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

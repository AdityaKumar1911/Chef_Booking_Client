import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
// import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";
import Logout from "./Components/Logout/Logout";
import SignUp from "./Components/SignUp/SignUp";
// import Footer from "./Footer/Footer";
import BookChef from "./Components/BookChef/BookChef";
import ChefBookSession from "./Components/ChefBookSession/ChefBookSession";
import { useState } from "react";
import Chatbot from "./Components/Chatbot/Chtbot";
import UserProfile from "./Components/UserProfule/UserProfile";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import backgraounimg from '../src/assets/background.svg'

function App() {
  const [dishName, setDishName] = useState("");
  return (
    <Router>
       <ToastContainer />
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home setDishName={setDishName} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/chef-booking" element={<BookChef />} />
        <Route path="/Chatbot" element={<Chatbot />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route
          path="/ChefBookSession"
          element={
            <ChefBookSession dishName={dishName} setDishName={setDishName} />
          }
        />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

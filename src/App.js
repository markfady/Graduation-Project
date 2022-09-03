import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'aos'

import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home.js";
import Educational from "./pages/Educational/Educational.js";
import Comments from "./pages/Comments/Comments";
import Transportation from "./pages/Transportation/Transportation.js";
import Map from "./pages/Map/Map.js";
import Donation from "./pages/Donation/Donation.js";


import LoginPage from "./pages/Donation/Login.js";
import RegisterPage from "./pages/Donation/Register.js";

import AdminAudio from "./pages/AdminAudio/AdminAudio";
import AdminVideos from "./pages/AdminVideos/AdminVideos";
import AddAdmin from "./pages/AddAdmin/AddAdmin";

import UserAudio from "./pages/UserAudio/UserAudio";
import UserVideos from "./pages/UserVideos/UserVideos";

import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";
import DashBoard from "./pages/DashBoard/DashBoard";
import UserDashBoard from "./pages/UserDashBoard/UserDashBoard.js"
import Footer from "./components/Footer/Footer.js";


function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/educational" element={<Educational />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/map" element={<Map />} />
          <Route path="/donation" element={<Donation />} />

          <Route path="/UserDashBoard" element={<UserDashBoard />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/AddAdmin" element={<AddAdmin/>} />
          <Route path="/AdminVideos" element={<AdminVideos />} />
          <Route path="/AdminAudio" element={<AdminAudio />} />

          <Route path="/UserVideos" element={<UserVideos />} />
          <Route path="/UserAudio" element={<UserAudio />} />

          <Route path="/Login" element={<LoginPage />} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
          <Route path="/Register" element={<RegisterPage />} />
        </Routes>

        <Footer />
      </Router>
    </Fragment>
  );
}
export default App;

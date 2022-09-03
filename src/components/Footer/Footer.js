import React from "react";
import {FaFacebookSquare, FaTwitterSquare, FaLinkedin} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import image2 from "../../assets/images/Logo.jpg";

function Footer() {
  let navigate = useNavigate()

  return (
    <div className="footer">
      <div className="container">
        <div class="row justify-content-between">
          <div id="content" className="col-md-4 col-lg-4 col-sm-12">
            <img src={image2} className="footer-logo" alt="Our Logo" />
            <p className="mt-4">
              This website made by group of students in Ahram Canadian
              University. Reproduction and distrubition of the project without
              written permission of the sponsor is prohibtied
            </p>
          </div>

          <div className="col-md-3 col-lg-3 col-sm-12">
            <div className="links">
              <h5>Links</h5>
              <ul className="links">
                <li onClick={() => {navigate('/')}}>Home</li>
                <li onClick={() => {navigate("/educational");}}>Educational</li>
                <li onClick={() => {navigate("/transportation");}}>Transportation</li>
                <li onClick={() => {navigate('/map')}}>Map</li>
                <li onClick={() => {navigate('/Login')}}>Donation</li>
                <li onClick={() => {navigate('/Login')}}>comments</li>
              </ul>
            </div>
          </div>

          <div  className="col-md-3 col-lg-3 col-sm-12">
            <div class="contact">
              <h5 className="">Contact Us</h5>
              <p class="get">
                Get in touch with us through email.We are waiting for your
                message
              </p>
              <a class="btn rounded-pill main-btn w-100" href="/">
                Send us!
              </a>

              <ul className="social-icons">
                <li>
                  <a href="/">
                    <i><FaFacebookSquare/></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i><FaTwitterSquare/></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i><FaLinkedin/></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          Created By piece of care team &copy; 2022 - Graduation project
        </div>
      </div>
    </div>
  );
}
export default Footer;

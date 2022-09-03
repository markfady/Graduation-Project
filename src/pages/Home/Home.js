import React, { Fragment } from "react";
import SectionHeader from "../../components/SectionHeader";
import Educational from "../../assets/images/Educational.jpg";
import Transportation from "../../assets/images/RequestRide.png";
import map from "../../assets/images/map.png";
import Donation from "../../assets/images/Donation.PNG";
import "./Home.css";

function Home() {
  return (
    <Fragment>
      <div className="home text-center pt-5 pb-5">
      <SectionHeader
        smallTitle="Welcome To our Website"
        bigTitle="Below You Can Check our services"
        description="Our services focus on helping handicapped people"
      />
        <div className="homeSection">
          <div className="main-title">
            <i className="fa-solid fa-desktop fa-2x"></i>
            <h2>our services</h2>
            <span className="underline"></span>
          </div>

          <div className="article">
            <div className="container">
              <div className="box">
                <img src={Educational} alt="" />
                <div className="content">
                  <h3> Educational</h3>
                  <p>
                    In educational service you can watch videos about how to
                    make handcrafts. also, listen to recorded books
                  </p>
                </div>
                <div className="link mt-4">
                  <a href="/educational">Read More</a>
                  <i className="fa fa-book-open fa-2x bottom-0"></i>
                </div>
              </div>
              <div className="box">
                <img src={Transportation} alt="" />
                <div className="content">
                  <h3> Transportation</h3>
                  <p>
                    In transportation service you can request a private ride to
                    or to check schedule of public buses "mwasalat misr".
                  </p>
                </div>
                <div className="link">
                  <a href="/Transportation">Read More</a>
                  <i className="fa-brands fa-accessible-icon fa-2x bottom-0"></i>
                </div>
              </div>
              <div className="box">
                <img src={map} alt="" />
                <div className="content">
                  <h3> Map</h3>
                  <p>
                    Our map is different where you can check the accessible
                    places near you by searching from categories bar. Also, Show
                    pictures and the route
                  </p>
                </div>
                <div className="link mt-2">
                  <a href="/Map">Read More</a>
                  <i className="fa fa-map-location-dot fa-2x bottom-0 "></i>
                </div>
              </div>
              <div className="box">
                <img src={Donation} alt="" />
                <div className="content">
                  <h3>Donation</h3>
                  <p>
                    If you want to donate with your old equipments &amp; tools or
                    maybe donating by cash to help others with their surgeries.
                    <br></br>
                    <b>Login must be made first</b>
                  </p>
                </div>
                <div className="link">
                  <a href="/Login">Read More</a>
                  <i className="fa fa-hand-holding-dollar fa-2x bottom-0"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Home;

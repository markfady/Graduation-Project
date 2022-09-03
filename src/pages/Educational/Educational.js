import React, { Fragment, useEffect } from "react";
import SectionHeader from "../../components/SectionHeader";

import AOS from "aos";
import "aos/dist/aos.css";

import audioImg from "../../assets/images/audio.jpg";
import videoImg from "../../assets/images/video.jpg";

import "./Educational.css";

function Educational() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Fragment>
      <div className="educational">
        <div className="container">
          <SectionHeader
           bigTitle="
                    In educational service you can watch videos about how to
                    make handcrafts. also, listen to recorded books"
                     />

          <div className="members">
            <div id="educcontent" className="row justify-content-center">
              <div className="col-4 mr-20" data-aos="fade-right">
                <div id="image1" className="member-img">
                  <img src={videoImg} alt="" />
                  <div className="overlay">
                    <div className="overlay-content"></div>
                  </div>
                </div>

                <form
                  className="text-center mt-4"
                  id="videobutton"
                  action="http://localhost:8000/UserVideos.php"
                  method="POST"
                  enctype="multipart/form-data"
                >
                  <button  className="btn btn-success" name="video">
                    View Video
                  </button>
                </form>
              </div>

              <div className="col-4 ml-20" data-aos="fade-left">
                <div id="image2" className="member-img">
                  <img src={audioImg} alt="" />
                  <div className="overlay">
                    <div className="overlay-content"></div>
                  </div>
                </div>

                <form
                  className="text-center mt-4"
                  action="http://localhost:8000/UserAudio.php"
                  method="POST"
                  enctype="multipart/form-data"
                  id="audiobutton"
                >
                  <button  className="btn btn-success" name="audio">
                    Listen to Audio
                  </button>
                </form>
              </div>

              <div className="clear-fix"></div>
            </div>
          </div>
        </div>
      </div>
      
    </Fragment>
  );
}

export default Educational;

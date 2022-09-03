import React, { useEffect, useState } from "react";
import "./Transportation.css";
import AOS from "aos";
import $ from "jquery";
import "aos/dist/aos.css";

import SectionHeader from "../../components/SectionHeader";
import bus_arrived from "../../assets/images/bus_arrived.svg";
import bus_comfort from "../../assets/images/bus_comfort.svg";
import bus_tracking from "../../assets/images/bus_tracking.svg";

function Transportatio() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const form = $(e.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        setResult(data);
      },
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <>
      <div className="transportaion">
        <SectionHeader
          smallTitle="Request Ride"
          bigTitle="Below you can choose from private ride,check schedule"
        />

        <div class="container">
          <div class="booking">
            <div className="transbox">
              <div id="title" className="title-box">
                <h2 className="title first-title">Private Rides</h2>
                <h3 className="title second-title">
                  book your travel ride now
                </h3>
              </div>
              <form
              id="grid"
                className="mb-5 mt-5"
                action="http://localhost:8000/Rides.php"
                method="post"
                onSubmit={(event) => handleSumbit(event)}
              >
                <div className="row justify-content-center">
                  <div className="col-3 text-center">
                    <label>Departure City</label>

                    <input 
                      type="text"
                      class="form-control mb-2 mr-sm-2 input1"
                      placeholder="Departure City"
                      name="Departure"
                      id="Departure"
                      onChange={(event) => handleChange(event)}
                    />
                  </div>

                  <div className="col-3 text-center">
                    <label>Going to</label>

                    <input
                      type="text"
                      class="form-control mb-2 mr-sm-2 input2"
                      placeholder="Going to"
                      name="Going"
                      id="goingto"
                      onChange={(event) => handleChange(event)}
                
                    />
                  </div>

                  <div className="col-3 text-center">
                    <label>Select Date</label>
                    <input
                      type="datetime-local"
                      class="form-control mb-2"
                      id="dateholder"
                      name="Date"
                      onChange={(event) => handleChange(event)}
                    />
                  </div>

                  <div className="col-3 text-center">
                    <label className="submit-btn">submit</label>
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <div class="info">
                <div  id= "bus"className="row justify-content-around">
                  <div class="col-4 text-center arrive">
                    <img src={bus_arrived} alt="" />
                    <div class="content">
                      <h3>Arrive on Time</h3>
                      <p>
                        Our scheduled, non-stop trips will get you there faster.
                      </p>
                    </div>
                  </div>
                  <div class="col-4  text-center comfort">
                    <img src={bus_comfort} alt="" />
                    <div class="content">
                      <h3>Your comfort matters</h3>
                      <p>
                        Enjoy the extra legroom and entertainment available
                        onboard.
                      </p>
                    </div>
                  </div>
                  <div class="col-4  text-center tracking">
                    <img src={bus_tracking} alt="" />
                    <div class="content">
                      <h3>live Tracking</h3>
                      <p>Always stay updated with your bus location.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="schedule">
            <div className="transbox">
              <div className="title-box">
                <h2 className="title first-title">Schedule</h2>
                <h3 className="title second-title">
                  public rides provided by government
                </h3>
              </div>
              <div class="table-content">
                <table>
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>From"Street Name"</th>
                      <th>To</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> Haram</td>
                      <td> Water Resovir</td>
                      <td>October City</td>
                      <td> 1:00Pm</td>
                    </tr>
                    <tr>
                      <td> Nasr City</td>
                      <td> Abbas-El-Akkad</td>
                      <td>October City</td>
                      <td>8:00AM</td>
                    </tr>
                    <tr>
                      <td> Tahrir</td>
                      <td> AUC Street</td>
                      <td>Haram</td>
                      <td> 6:45AM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* ./schudle */}
        </div>
      </div>
    </>
  );
}

export default Transportatio;

import React from "react";
import { Dropdown } from "react-bootstrap";
import { FaUserEdit, FaFileUpload, FaTaxi } from "react-icons/fa";
import "./UserDashBoard.css";

const UserDashBoard = () => {
  return (
    <>
      <div className="dashboard">
        <div  id= "rows" className="row">
          <div id="dashboarditem2" className="col">
            <div className="dash-item">
              <Dropdown>
                <Dropdown.Toggle
                  variant="info"
                  id="dropdown-basic"
                ></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="http://localhost:3000/comments">Write Comment</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div id="icon1" className="dash-item-content">
              <i class="fa-solid fa-comment"></i>
                <h2>Show comments</h2>
              </div>
            </div>
          </div>
          <div id="dashboarditem2"className="col">
            <div className="dash-item">
              <Dropdown>
                <Dropdown.Toggle
                  variant="info"
                  id="dropdown-basic"
                ></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="http://localhost:3000/Donation">
                    Donate
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div id="icon2"className="dash-item-content">
                <i className="fa-solid fa-hand-holding-dollar"></i> 
                <h2>Donation</h2>
              </div>
            </div>
          </div>
            </div>
          </div>
    </>
  );
};

export default UserDashBoard;

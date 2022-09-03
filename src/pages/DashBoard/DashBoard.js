import React from "react";
import { Dropdown } from "react-bootstrap";
import { FaUserEdit, FaFileUpload, FaTaxi } from "react-icons/fa";
import "./DashBoard.css";

const DashBoard = () => {
  return (
    <>
      <div className="dashboard">
        <div  id= "rows" className="row">
          <div className="col">
            <div className="dash-item">
              <Dropdown>
                <Dropdown.Toggle
                  variant="info"
                  id="dropdown-basic"
                ></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="http://localhost:3000/AddAdmin">Add New Admin</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="dash-item-content">
                <i>
                  <FaUserEdit />
                </i>
                <h2>Admin</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="dash-item">
              <Dropdown>
                <Dropdown.Toggle
                  variant="info"
                  id="dropdown-basic"
                ></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="http://localhost:3000/AdminVideos">
                    Add New Video
                  </Dropdown.Item>
                  <Dropdown.Item href="http://localhost:3000/AdminAudio">
                    Add New Audio
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="dash-item-content">
                <i>
                  <FaFileUpload />
                </i>
                <h2>Educational Part</h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="dash-item">
              <Dropdown>
                <Dropdown.Toggle
                  variant="info"
                  id="dropdown-basic"
                ></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="">Add New Location</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
              <div className="dash-item-content">
                <i>
                  <FaTaxi />
                </i>
                <h2>Rides</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="dash-item">
              <Dropdown>
                <Dropdown.Toggle
                  variant="info"
                  id="dropdown-basic"
                ></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="http://localhost:8000/ShowPhotos.php">Show</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
              <div className="dash-item-content">
                <i>
                  <FaTaxi />
                </i>
                <h2>View User Photos</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;

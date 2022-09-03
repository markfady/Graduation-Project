import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

import "./adminVideos.css";

const AdminVideos = () => {
  const realFileBtn = document.getElementById("real-file");
  const customTxt = document.getElementById("custom-text");

  const handleChange = () => {
    if (realFileBtn.value) {
      customTxt.innerHTML = realFileBtn.value.match(
        /[\/\\]([\w\d\s\.\-\(\)]+)$/
      )[1];
    } else {
      customTxt.innerHTML = "No file chosen, yet.";
    }
  };

  return (
    <>
      <div className="upload-video">
        <div class="drag-area">
          <i className="icon ">
            <FaCloudUploadAlt />
          </i>

          <form
            className="text-center"
            action="http://localhost:8000/AdminVideos.php"
            method="POST"
            encType="multipart/form-data"
          >
            <input
              type="file"
              onChange={handleChange}
              id="real-file"
              name="video"
              hidden
            />
           <button
            
              onClick={() => {
                realFileBtn.click();
              }}
              id="custom-button"
            >
            
            </button>
            <span id="custom-text">No file chosen, yet.</span>
            <br />
            <input  className="btn btn-danger" type="file" name="video" class="form-control-file"/>
            <button name="save"> Save</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminVideos;

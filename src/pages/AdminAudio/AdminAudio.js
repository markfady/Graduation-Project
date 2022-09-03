import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";


import "../AdminVideos/adminVideos.css"

const AdminAudio = () => {
  const realFileBtn = document.getElementById("real-file");
  const customTxt = document.getElementById("custom-text");


  return (
    <>
      <div className="upload-video">
        <div class="drag-area">
          <i className="icon ">
            <FaCloudUploadAlt />
          </i>

          <form
            className="text-center"
            action="http://localhost:8000/AdminAudio.php"
            method="POST"
            encType="multipart/form-data"
          >
            <input
              type="file"
              id="real-file"
              name="video"
              hidden
            />
            <br />
            <input type="file" name="audio" class="form-control-file"/>
		      	<button name="save"> Save</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminAudio;

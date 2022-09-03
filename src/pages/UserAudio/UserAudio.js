import React from "react";
import './UserAudio.css';
const UserAudio = () => {
  return (
    <>
      <div className="col-md-12">
        <form
          action="http://localhost:8000/UserAudio.php"
          method="POST"
          encType="multipart/form-data"
        >
          <button name="audio">show</button>
        </form>
      </div>
    </>
  );
};

export default UserAudio;

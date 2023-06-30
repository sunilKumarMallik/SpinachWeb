import React from "react";

const MainLoader = () => {
  return (
    <div className="d-flex justify-content-center min-vh-100 my-auto align-items-center">
      <div className="spinner-grow text-success" style={{width:"4rem",height:"4rem"}} role="status"></div>
    </div>
  );
};

export default MainLoader;

import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/home-img.png'


const Home = () => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="container d-flex justify-content-center align-items-center"
    >
      <div className="row w-100 d-flex justify-content-center align-items-center">
        {/* Left Column: Text and Button */}
        <div className="col-md-6 text-center">
          <h1 className="text-primary">WELCOME TO EMPLOYEE PORTAL</h1>
          <Link className="btn btn-primary my-3" to="/login">
            CONTINUE TO PORTAL
          </Link>
        </div>

        {/* Right Column: Image */}
        <div className="col-md-6 d-flex justify-content-center">
          <img style={{ width: "100%", maxWidth: "500px", height: "auto" }} src={img1} alt="Employee Portal" />
        </div>
      </div>
    </div>
  );
};

export default Home;

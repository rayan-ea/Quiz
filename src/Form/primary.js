import React from "react";
import { useNavigate } from "react-router-dom";
import "./primary.css";
import NavBar from "../component/NavBar";
import SideBar from "../component/SideBar";
import history from "../assets/Rectangle 274.jpg";
import medecine from "../assets/Rectangle 275.jpg";
import agriculture from "../assets/Rectangle 277.jpg";
import technology from "../assets/Rectangle 288.jpg";

const Primary = () => {
  const navigate = useNavigate();

  return (
    <div className="main-div">
      <NavBar></NavBar>
      <SideBar></SideBar>

      <div className="main-content">
        <form>
          <div className="title-container">
            <h1>Select Topic</h1>
            <h2>Featured Categories</h2>
          </div>
          <div className="images-container">
            <div className="image-line">
              <div className="image-button">
                <img
                  src={history}
                  alt="image1"
                  onClick={() => navigate("/History")}
                />
                <span className="spann">History</span>
              </div>
              <div className="image-button">
                <a href="page2.html">
                  <img src={medecine} alt="image2" />
                  <span className="spann">Medecine</span>
                </a>
              </div>
              <div className="image-button">
                <a href="page3.html">
                  <img src={history} alt="image3" />
                  <span className="spann">History</span>
                </a>
              </div>
              <div className="image-button">
                <a href="page4.html">
                  <img src={medecine} alt="image4" />
                  <span className="spann">Medecine</span>
                </a>
              </div>
            </div>
            <div className="image-line">
              <div className="image-button">
                <a href="page5.html">
                  <img src={technology} alt="image5" />
                  <span className="spann">Technologie</span>
                </a>
              </div>
              <div className="image-button">
                <a href="page6.html">
                  <img src={agriculture} alt="image6" />
                  <span className="spann">Agriculture</span>
                </a>
              </div>
              <div className="image-button">
                <a href="page7.html">
                  <img src={technology} alt="image7" />
                  <span className="spann">Technologie</span>
                </a>
              </div>
              <div className="image-button">
                <a href="page8.html">
                  <img src={agriculture} alt="image8" />
                  <span className="spann">Agriculture</span>
                </a>
              </div>
            </div>
            <div className="image-line">
              <div className="image-button">
                <a href="page9.html">
                  <img src={technology} alt="image9" />
                  <span className="spann">Technologie</span>
                </a>
              </div>
              <div className="image-button">
                <a href="page10.html">
                  <img src={agriculture} alt="image10" />
                  <span className="spann">Agriculture</span>
                </a>
              </div>
              <div className="image-button">
                <a href="page11.html">
                  <img src={technology} alt="image11" />
                  <span className="spann">Technologie</span>
                </a>
              </div>
              <div className="image-button">
                <a href="page12.html">
                  <img src={agriculture} alt="image12" />
                  <span className="spann">Agriculture</span>
                </a>
              </div>
            </div>
            <div className="image-line">
              <div className="more-button-container">
                <button className="more-button">More</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Primary;

import React from 'react';
import './teamdetail.css';

export default function Teamdetailimages() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div
              className="card card0"
              style={{
                background:
                  "url('https://i.pinimg.com/736x/8f/a0/51/8fa051251f5ac2d0b756027089fbffde--terry-o-neill-al-pacino.jpg') center center no-repeat",
                backgroundSize: '300px',
                '&:hover': {
                  // background:
                  //   "url('https://i.pinimg.com/736x/8f/a0/51/8fa051251f5ac2d0b756027089fbffde--terry-o-neill-al-pacino.jpg') center center no-repeat",
                  // backgroundSize: '600px',
                  backgroundColor: 'red',
                },
              }}
            >
              <div className="border">
                <h2>Al Pacino</h2>
                <div className="icons">
                  <i className="fa fa-codepen" aria-hidden="true"></i>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                  <i className="fa fa-dribbble" aria-hidden="true"></i>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="card card1">
              <div className="border">
                <h2>Ben Stiller</h2>
                <div className="icons">
                  <i className="fa fa-codepen" aria-hidden="true"></i>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                  <i className="fa fa-dribbble" aria-hidden="true"></i>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="card card2">
              <div className="border">
                <h2>Patrick Stewart</h2>
                <div className="icons">
                  <i className="fa fa-codepen" aria-hidden="true"></i>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                  <i className="fa fa-dribbble" aria-hidden="true"></i>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

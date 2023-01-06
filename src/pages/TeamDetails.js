import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import './Teamdetails.css';

export default function TeamDetails() {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div class="card card0">
            <div class="border">
              <h2>ARRNAYA</h2>
              <p className="designation">Founder & CEO</p> <br />
              <a href="https://www.linkedin.com/in/arrnaya/" target="_blank" rel="noreferrer">
                {' '}
                <AiFillLinkedin size={32} color="#fff" className="fa fa-codepen" />
              </a>
              <i aria-hidden="true"></i>
              <p className="description">
                <br />
                Working in Defi for more than two years and has delivered 50+ smart contracts for various projects.
                Arranya is listed as SAFU DEV on GEMPAD.
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div class="card card1">
            <div class="border">
              <h2>NIKHIL RANA</h2>
              <p className="designation">Sr. Web3 Developer</p> <br />
              <a href="https://www.linkedin.com/in/nikhil-rana-a18317217/" target="_blank" rel="noreferrer">
                {' '}
                <AiFillLinkedin size={32} color="#fff" className="fa fa-codepen" />
              </a>
              <i aria-hidden="true"></i>
              <p className="description">
                <br />
                Expert in Web3, JavaScript, MERN Stack, and python. Leads from the front with his dedication to
                providing quality solutions built on blockchain.
              </p>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div class="card card2">
            <div class="border">
              <h2>MAYANK BHATI</h2>
              <p className="designation">Full Stack Developer</p>
              <br />
              <a href="https://www.linkedin.com/in/mayank-rajput-412383209/" target="_blank" rel="noreferrer">
                {' '}
                <AiFillLinkedin size={32} color="#fff" className="fa fa-codepen" />
              </a>
              <i aria-hidden="true"></i>
              <p className="description">
                <br />
                Lead frontend dev at KWS with expertise in JavaScript, Micro services and API, MUI, and BootStrap.
              </p>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div class="card card4 mt-5">
            <div class="border">
              <h2>CHAITANYA</h2>
              <p className="designation">PR Manager & JavaScript Intern</p>
              <br />
              <a href="https://www.linkedin.com/in/ritu-kanojiya-586a8a245/" target="_blank" rel="noreferrer">
                {' '}
                <AiFillLinkedin size={32} color="#fff" className="fa fa-codepen" />
              </a>
              <i aria-hidden="true"></i>
              <p className="description">
                <br />
                Manager of Arrnaya's Community and intern at KWS learning JavaScript.
              </p>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div class="card card3 mt-5">
            <div class="border">
              <h2>SAURABH</h2>
              <p className="designation">Full Stack Developer</p>
              <br />
              <a href="https://www.linkedin.com/in/saurabh-yadav-626004168/" target="_blank" rel="noreferrer">
                {' '}
                <AiFillLinkedin size={32} color="#fff" className="fa fa-codepen" />
              </a>
              <i aria-hidden="true"></i>
              <p className="description">
                <br />
                UI/UX Developer with expertise in React Js and MUI.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div class="card card0">
            <div class="border">
              <h2>ARRNAYA</h2>
              <div class="icons">
                <AiFillLinkedin size={32} color="#22abe3" className="fa fa-codepen" />
                <i aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

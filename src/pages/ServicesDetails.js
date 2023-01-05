import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './teamdetail.css';

export default function ServicesDetails() {
  const [services, setServices] = useState();

  useEffect(() => {
    const portfolioInterval = setInterval(() => {
      axios.get(`${window.URL}/api/gettingservices`).then((res) => {
        setServices(res.data);
      });
    }, 1100);
    return () => {
      clearInterval(portfolioInterval);
    };
  }, []);
  return (
    <div>
      <body>
        <div class="container">
          <Grid container spacing={1}>
            {services && services.length > 0 ? (
              services.map((res, index) => {
                return (
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={4} key={index}>
                    <div class="card">
                      <div class="face face1">
                        <div class="content">
                          <img src={res.serviceimage} alt="" />
                          <h3>{res.serviceheading}</h3>
                        </div>
                      </div>
                      <div class="face face2">
                        <div class="content">
                          <p>{res.servicedescriptions}</p>
                        </div>
                      </div>
                    </div>
                  </Grid>
                );
              })
            ) : (
              <div className="nodata">
                <p className="data">Loading...</p>
              </div>
            )}
          </Grid>
        </div>
        {/* <div class="container">
          {services && services.length > 0 ? (
            services.map((res, index) => {
              return (
                <Grid item xs={12} sm={6} md={6} xl={4} key={index}>
                  <div class="card">
                    <div class="face face1">
                      <div class="content">
                        <img src={res.serviceimage} alt="" />
                        <h3>{res.serviceheading}</h3>
                      </div>
                    </div>
                    <div class="face face2">
                      <div class="content">
                        <p>{res.servicedescriptions}</p>
                      </div>
                    </div>
                  </div>
                </Grid>
              );
            })
          ) : (
            <div className="nodata">
              <p className="data">Loading...</p>
            </div>
          )}
        </div> */}
      </body>
    </div>
  );
}

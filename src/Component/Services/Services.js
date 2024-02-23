import React, { useEffect, useState } from 'react'
import "./Services.css"
import ScrollReveal from 'scrollreveal'
import Data from '../Data/Data';

const Services = () => {

  const [serviceData, setServiceData] = useState(Data);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    sr.reveal('.service-box', {})

    return () => sr.destroy();
  }, []);

  return (
    <>
      <div className="services">
        <div className="service-box">
          <h2>Our Services</h2>
          <div className="service-box-main">
            {serviceData.map((item) => (
              <>
                <div className="services-cards" key={item.id}>
                  <div className="services-cards-image">
                    <a href="">
                      <img src={item.cover} alt="" />
                    </a>
                  </div>
                  <div className="services-cards-title">
                    <h5>{item.title}</h5>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Services

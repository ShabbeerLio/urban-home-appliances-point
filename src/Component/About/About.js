import React, { useEffect } from 'react'
import "./About.css"
import ScrollReveal from 'scrollreveal'
import AboutKey from "../../Assets/Images/aboutimg.jpg"

const About = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    sr.reveal('.about-main', {})

    return () => sr.destroy();
  }, []);



  return (
    <>
      <div className="aboutUs">
        <div className="about-main">
          <div className="about-left">
            <div className="about-title">
              <h2>Urban Home Appliances Point </h2>
            </div>
            <div className="about-detail">
              <p>Welcome to Urban Home Appliances Point, where style meets functionality in the world of home appliances. At Urban Home Appliances Point, we pride ourselves on curating a selection of high-quality appliances that seamlessly integrate into modern urban living spaces.</p>
              <p> Our mission is to provide our customers with the latest innovations in home appliances, from sleek and efficient kitchen gadgets to cutting-edge laundry solutions, all designed to enhance your home environment and simplify your daily routines.</p>
            </div>
          </div>
          <div className="about-right">
            <img className="image2" src={AboutKey} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About

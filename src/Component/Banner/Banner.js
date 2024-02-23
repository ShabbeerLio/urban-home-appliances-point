import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
// import bannerimg from "../../Assets/10.png"
import "./Banner.css"

const Banner = () => {

  useEffect(() => {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '80px',
        duration: 2000,
        reset: true,
    });

    sr.reveal('.banner-heading', {})

    return () => sr.destroy();
}, []);

  return (
    <>
      <div className="banner">
        <div className="banner-heading">
          <h1 >Urban Home Appliances Point</h1>
        </div>
        <img src="https://www.justrepair.co.in/admin/upload/post-images/refri.jpg" alt="" />
      </div>
    </>
  )
}

export default Banner

import React, { useEffect, useState } from 'react'
import "./Footer.css"
import Logo from "../../Assets/Icons/Company.png"
import Data from '../Data/Data'

const Footer = (props) => {

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        function scrollActive() {
            const scrollY = window.scrollY;

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.add('active-link');
                } else {
                    document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.remove('active-link');
                }
            });
        }

        window.addEventListener('scroll', scrollActive);

        return () => {
            window.removeEventListener('scroll', scrollActive);
        };
    }, []);

    const [serviceData, setServiceData] = useState(Data);
    return (
        <>
            <div className="footer">
                <div className="footer-main">
                    <div className="footer-detail">
                        <a href="#home">
                        <img src={Logo} alt="" />
                        </a>
                        <p>Welcome to Urban Home Appliances Point! Your destination for top-quality appliances. Explore our range for all your needs.</p>
                    </div>
                    <div className="quick-link">
                        <h2>Quick Link</h2>
                        <ul>
                            <li><a href="#home">
                            Home
                            </a></li>
                            <li><a href="#about">
                            About Us
                            </a></li>
                            <li><a href="#services">
                            Our Services
                            </a></li>
                            <li><a href="#contactUs">
                            Contact Us
                            </a></li>
                        </ul>
                    </div>
                    <div className="footer-services">
                        <h2>Services</h2>
                        <div className="services-images">
                            {serviceData.slice(2).map((item) => (
                                <>
                                <div className="service-image-box">
                                    <img src={item.cover} alt="" />

                                </div>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="footer-contact">
                        <h2>Contact </h2>
                        <ul>
                            <li> <p>
                                <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
                                    <path fill="currentColor" d="m19.799 5.165l-2.375-1.83a1.997 1.997 0 0 0-.521-.237A2.035 2.035 0 0 0 16.336 3H9.5l.801 5h6.035c.164 0 .369-.037.566-.098s.387-.145.521-.236l2.375-1.832c.135-.091.202-.212.202-.334s-.067-.243-.201-.335M8.5 1h-1a.5.5 0 0 0-.5.5V5H3.664c-.166 0-.37.037-.567.099c-.198.06-.387.143-.521.236L.201 7.165C.066 7.256 0 7.378 0 7.5c0 .121.066.242.201.335l2.375 1.832c.134.091.323.175.521.235c.197.061.401.098.567.098H7v8.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5"></path>
                                </svg>
                            </p>
                            Crossing Republic, Near by CNG Pump, Main Crossing Bazar Gzb.</li>
                            <li>
                                <p>
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path strokeDasharray="64" strokeDashoffset="64" d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z">
                                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
                                            </path>
                                            <path strokeDasharray="4" strokeDashoffset="4" d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723" opacity="0">
                                                <set attributeName="opacity" begin="0.7s" to="1"></set>
                                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="4;8"></animate>
                                            </path>
                                            <path strokeDasharray="10" strokeDashoffset="10" d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535" opacity="0">
                                                <set attributeName="opacity" begin="1s" to="1"></set>
                                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="10;20"></animate>
                                            </path>
                                        </g>
                                    </svg></p>
                                <a href="tel: +919871984233">
                                    +91 9871984233
                                </a>
                            </li>
                            <li>
                                <p>
                                    <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path strokeDasharray="64" strokeDashoffset="64" d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z">
                                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
                                            </path>
                                            <path strokeDasharray="4" strokeDashoffset="4" d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723" opacity="0">
                                                <set attributeName="opacity" begin="0.7s" to="1"></set>
                                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="4;8"></animate>
                                            </path>
                                            <path strokeDasharray="10" strokeDashoffset="10" d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535" opacity="0">
                                                <set attributeName="opacity" begin="1s" to="1"></set>
                                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="10;20"></animate>
                                            </path>
                                        </g>
                                    </svg>
                                </p>
                                <a href="tel: +919540370351">
                                    +91 9540370351
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-down">
                    <div className="footer-copyright">
                        <p>© 2024 Urban Home Appliances Point</p>
                        <p>Designed by :<a href="https://globalitsources.com/">&#160; Global IT Sources</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

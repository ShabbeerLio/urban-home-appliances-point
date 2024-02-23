import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import Logo from "../../Assets/Icons/Company.png"
import FormFloat from './FormFloat';

const Navbar = (props) => {

    const [formopen, setFormopen] = useState(false);

    const formIsOpen = () => {

        console.log("open")
        setFormopen(!formopen);
    }
    const formIsClose = () => {
        setFormopen(false)
    }



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

    const [menuClass, setMenuClass] = useState('nav-menu');

    // const toggleMenu = () => {
    //   setMenuClass(menuClass === 'nav-menu' ? 'nav-menu responsive' : 'nav-menu');
    // };

    // Function to close the menu when a navigation link is clicked
    const closeMenu = () => {
        setMenuClass('nav-menu');
    };

    return (
        <>
            <div className="navBar">
                <div id="myNavMenu" className={menuClass}>
                    <nav className="row navbar navbar-expand-lg navbar-light align-items-lg-end">
                        <div className="container-fluid">
                            <a className="navBar-logo" href="#home">
                                <img src={Logo} alt="" />
                            </a>
                            <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon top-bar"></span>
                                <span className="toggler-icon middle-bar"></span>
                                <span className="toggler-icon bottom-bar"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#home" onClick={closeMenu}>Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about" onClick={closeMenu}>About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#services" onClick={closeMenu}>Our Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contactUs" onClick={closeMenu}>Contact Us</a>
                                    </li>
                                    <li>
                                        <div className="call-number-responsive justify-content-end" >
                                            <div className="call-number-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
                                        <path fill="currentColor" d="M3.833 4h4.49L9.77 7.618l-2.325 1.55A1 1 0 0 0 7 10c.003.094 0 .001 0 .001v.021a2.129 2.129 0 0 0 .006.134c.006.082.016.193.035.33c.039.27.114.642.26 1.08c.294.88.87 2.019 1.992 3.141c1.122 1.122 2.261 1.698 3.14 1.992c.439.146.81.22 1.082.26a4.424 4.424 0 0 0 .463.04l.013.001h.008s.112-.006.001 0a1 1 0 0 0 .894-.553l.67-1.34l4.436.74v4.32c-2.111.305-7.813.606-12.293-3.874C3.227 11.813 3.527 6.11 3.833 4zm5.24 6.486l1.807-1.204a2 2 0 0 0 .747-2.407L10.18 3.257A2 2 0 0 0 8.323 2H3.781c-.909 0-1.764.631-1.913 1.617c-.34 2.242-.801 8.864 4.425 14.09c5.226 5.226 11.848 4.764 14.09 4.425c.986-.15 1.617-1.004 1.617-1.913v-4.372a2 2 0 0 0-1.671-1.973l-4.436-.739a2 2 0 0 0-2.118 1.078l-.346.693a4.71 4.71 0 0 1-.363-.105c-.62-.206-1.481-.63-2.359-1.508c-.878-.878-1.302-1.739-1.508-2.36a4.583 4.583 0 0 1-.125-.447z"></path>
                                    </svg>
                                            </div>
                                            <p><a href="tel: +919871984233">
                                                +91 9871984233
                                            </a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="call-number justify-content-end">
                                <div className="call-number-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
                                        <path fill="currentColor" d="M3.833 4h4.49L9.77 7.618l-2.325 1.55A1 1 0 0 0 7 10c.003.094 0 .001 0 .001v.021a2.129 2.129 0 0 0 .006.134c.006.082.016.193.035.33c.039.27.114.642.26 1.08c.294.88.87 2.019 1.992 3.141c1.122 1.122 2.261 1.698 3.14 1.992c.439.146.81.22 1.082.26a4.424 4.424 0 0 0 .463.04l.013.001h.008s.112-.006.001 0a1 1 0 0 0 .894-.553l.67-1.34l4.436.74v4.32c-2.111.305-7.813.606-12.293-3.874C3.227 11.813 3.527 6.11 3.833 4zm5.24 6.486l1.807-1.204a2 2 0 0 0 .747-2.407L10.18 3.257A2 2 0 0 0 8.323 2H3.781c-.909 0-1.764.631-1.913 1.617c-.34 2.242-.801 8.864 4.425 14.09c5.226 5.226 11.848 4.764 14.09 4.425c.986-.15 1.617-1.004 1.617-1.913v-4.372a2 2 0 0 0-1.671-1.973l-4.436-.739a2 2 0 0 0-2.118 1.078l-.346.693a4.71 4.71 0 0 1-.363-.105c-.62-.206-1.481-.63-2.359-1.508c-.878-.878-1.302-1.739-1.508-2.36a4.583 4.583 0 0 1-.125-.447z"></path>
                                    </svg>

                                </div>
                                <p><a href="tel: +919871984233">
                                    +91 9871984233
                                </a></p>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="floatbar">
          <div className="floatbar-icon">
            <a href="https://wa.me/+919871984233">
              <svg width="1em" height="1em" viewBox="0 0 256 258" xmlns="http://www.w3.org/2000/svg" {...props}>
                <defs>
                  <linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%">
                    <stop offset="0%" stopColor="#1FAF38"></stop>
                    <stop offset="100%" stopColor="#60D669"></stop>
                  </linearGradient>
                  <linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%">
                    <stop offset="0%" stopColor="#F9F9F9"></stop>
                    <stop offset="100%" stopColor="#FFF"></stop>
                  </linearGradient>
                </defs>
                <path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"></path>
                <path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"></path>
                <path fill="#FFF" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"></path>
              </svg>
            </a>
          </div>
          <div className="floatbar-icon">
            <a href="tel: +919871984233">
              <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path strokeDasharray="64" strokeDashoffset="64" d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
                    <animateTransform attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.6s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"></animateTransform>
                  </path>
                  <path strokeDasharray="4" strokeDashoffset="4" d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723" opacity="0">
                    <set id="lineMdPhoneCallLoop0" attributeName="opacity" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" to="1"></set>
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.2s" values="4;8"></animate>
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s;lineMdPhoneCallLoop0.begin+3.3s" dur="0.3s" values="0;4"></animate>
                    <set attributeName="opacity" begin="1.6s;lineMdPhoneCallLoop0.begin+3.6s" to="0"></set>
                  </path>
                  <path strokeDasharray="10" strokeDashoffset="10" d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535" opacity="0">
                    <set attributeName="opacity" begin="1s;lineMdPhoneCallLoop0.begin+3s" to="1"></set>
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s;lineMdPhoneCallLoop0.begin+3s" dur="0.2s" values="10;20"></animate>
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s;lineMdPhoneCallLoop0.begin+3.5s" dur="0.3s" values="0;10"></animate>
                    <set attributeName="opacity" begin="1.8s;lineMdPhoneCallLoop0.begin+3.8s" to="0"></set>
                  </path>
                </g>
              </svg>
            </a>
          </div>
          <div className="floatbar-icon" onClick={formIsOpen}>
            <svg width="1em" height="1em" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" {...props}>
              <path fill="currentColor" d="M3 4C1.344 4 0 5.344 0 7v12c0 1.656 1.344 3 3 3h20c1.656 0 3-1.344 3-3V7c0-1.656-1.344-3-3-3zm0 2h20c.551 0 1 .449 1 1v.5l-11 5.938L2 7.5V7c0-.551.449-1 1-1M2 7.781l6.531 5.094l-6.406 6.563l7.813-5.563L13 15.844l3.063-1.969l7.812 5.563l-6.406-6.563L24 7.781V19a.95.95 0 0 1-.125.438c-.165.325-.486.562-.875.562H3c-.389 0-.71-.237-.875-.563A.95.95 0 0 1 2 19z"></path>
            </svg>
          </div>
        </div>
        {formopen && (
          <>
            <FormFloat formIsClose={formIsClose}/>
          </>
        )}
            </div>
        </>
    )
}

export default Navbar

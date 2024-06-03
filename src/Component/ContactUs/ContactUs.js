import React, { useEffect, useState } from 'react'
import "./ContactUs.css"
import ScrollReveal from 'scrollreveal'
import contactImg from "../../Assets/Images/ContactUS.jpg"

const ContactUs = (props) => {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    sr.reveal('.contact-main', {})
    sr.reveal('.contact-body', {})

    return () => sr.destroy();
  }, []);

  // form
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formData.name;
    const phoneNumber = formData.number;
    const message = formData.message;

    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Message:', message);

    setFormData({
      name: '',
      number: '',
      message: ''
    });
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };


  return (
    <>
      <div className="contact">
        <div className="contact-main">
          <div className="contact-left">
            <h2>Contact us for enquiries, repairs, and customer support assistance. </h2>
            <p>Welcome to Urban Home Appliances Point's! We're thrilled to connect with you and assist in any way possible. At Urban Home Appliances Point, we're committed to providing top-notch service and quality products to enhance your home living experience.</p>
            <p>Whether you have questions about our latest appliances, need assistance with an order, or simply want to share feedback, we're here to listen and respond promptly.</p>
          <div className="contact-caller-button">
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
              <div className="contact-caller-button-number">
                <p>Are you searching for Technician</p>
                <h4>+91 9871984233</h4>
              </div>
            </a>
          </div>
          </div>
          <div className="contact-right">
            <h3 style={{ paddingBottom: "10px" }}>Get a Quick Help </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  value={formData.name}
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  value={formData.number}
                  type="number"
                  className="form-control"
                  id="number"
                  placeholder="Phone No."
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  value={formData.message}
                  className="form-control"
                  id="message"
                  placeholder="Message"
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Get Call Back
              </button>
            </form>
          </div>
        </div>
        <div className="contact-body">
          <div className="contact-body-left">
            <img src={contactImg} alt="" />
          </div>
          <div className="contact-body-right">
            <p>Our team at Urban Home Appliances Point understands the importance of reliable communication. That's why we've streamlined our contact process to ensure your inquiries are addressed efficiently.</p>
            <p> Whether you prefer reaching out via email, phone, or through the convenient contact form below, rest assured your message will reach the right hands. We value your time and strive to provide clear, helpful responses to all your queries.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs

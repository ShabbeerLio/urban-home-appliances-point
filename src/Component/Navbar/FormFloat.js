import React, { useState } from 'react'
import "./FormFloat.css"

const FormFloat = (props) => {

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
        <div className='FormFloat'>
            <div className="FormFloat-box">
                <div className="FormFloat-card">
                    <div className="close-button" >
                        <p onClick={props.formIsClose}>X</p>
                    </div>
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
        </div>
    )
}

export default FormFloat

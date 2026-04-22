import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx'
import './Pages.css'

const Contact = () => {

  /* Funciones */

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(form);
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.message.trim() || !form.email.trim()) {
      console.log("ERROR: One or more parameters are empty.");
      alert("Please fill all the parameters.");
      return; 
    }

    //const formElement = e.currentTarget;
    //const emailInput = formElement.elements.email;

    //if (!emailInput.checkValidity()) {
      //console.log("ERROR: Invalid email.");
      //alert("Please enter a valid email.");
      //return;
    //}

    const data = await fetch('/api/server', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });

    const res = await data.json();
    console.log(res);
    alert("Email sent!");
  };

  /* --- Return --- */

  return (
    <div className="body">
      <Navbar />
      <h1 style={{ color: '#ccff00' }}>Contact <span style={{ color: 'white' }}>Me</span></h1>
      <p className="description-text">Questions? Send me a message!</p>
      <div className="email-container">
        <div className="input-container"> {/* Inputs */ }
          <input style={{ color: 'white' }} required
            name="name"
            type="text"
            value={form.name}
            onChange={handleOnchange}
            placeholder="Your Name"
          />
          <input style={{ color: '#ff00e5' }} required
            name="email"
            type="email"
            value={form.email}
            onChange={handleOnchange}
            placeholder="example@email.com"
          />
        </div>
        <div style={{ paddingTop: '21px' }}>
          <textarea
            name="message"
            type="message"
            rows="10"
            cols="50"
            value={form.message}
            onChange={handleOnchange}
            placeholder="Write your message here..."
          />
        </div>
        <button onClick={handleSendEmail}>
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Contact;
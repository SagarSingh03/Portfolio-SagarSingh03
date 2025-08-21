import React, { useState } from 'react';
import './Contact.css';
import profile from '../../assets/sagar.profile.jpg';

function Contact() {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending the message...');
    const formData = new FormData(event.target);

    formData.append('access_key', 'c0ee2f16-95ea-4144-bf29-868615310154');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        event.target.reset();
      } else {
        console.log('Error', data);
        setResult(data.message || 'Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setResult('An error occurred. Please check your connection and try again.');
    }
  };

  return (
    <div className="contact-page">
      <div className="contact">
        <h1>Contact</h1>
        <img src={profile} alt="Sagar's charcoal sketch" className="contact-image" />
        <p>
          I'm always excited to connect and explore new ideas, collaborations, <br />
          or simply have a great conversation. <br />
          Got a question or just want to say hello? <br />
          Drop me a line at <strong>sagarsingh3b@gmail.com</strong> or{' '}
          <strong>+91-9864134992</strong>, or use the form below — I'd love to hear from you!
        </p>
      </div>

      <div className="contact-form">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form"
            placeholder="Your Name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form"
            placeholder="xyz@gmail.com"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            className="form"
            placeholder="Your message..."
            required
          />
          <span className="result-message">{result}</span>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
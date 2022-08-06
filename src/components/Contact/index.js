import React, { useState } from 'react';
import { validateEmail, capitalizeFirstLetter } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(capitalizeFirstLetter(`${e.target.name} is required.`));
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <div>
      <h3>Contact</h3>
      <div className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label><br />
          <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email address:</label><br />
          <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
        </div>
        <div>
          <label htmlFor="message">Message:</label><br />
          <textarea name="message" rows="5"  defaultValue={message} onBlur={handleChange}/>
        </div>
        <div className="errorMessage">{errorMessage}</div>
        <button data-testid="button" type="submit">Submit</button>
      </div>
    </div>
  )
}

export default Contact;
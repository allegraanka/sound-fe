import React, { useState } from 'react';
import styles from './email-capture.module.css';

export default function EmailCapture() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`User email test: ${email}`);

    await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email 
      })
    })
    // .then((response) => console.log(`response: ${response.json({})}`));

    setEmail(''); // reset email input
    location.replace('/thanks');
  }

  return(
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
          <input
            required
            pattern='^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
            className={styles.emailInput} 
            type='email'
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <button className={styles.emailSubmit} type="submit" value="Sign up">
              Sign up
          </button>
      </form>
    </>
  );
}
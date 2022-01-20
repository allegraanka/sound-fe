import React, { useState } from 'react';
import styles from './email-capture.module.css';

export default function EmailCapture() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`User email test: ${email}`);

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email 
      })
    });

    const { error } = await res.json();
    if (error) {
      console.log(`Error sending email to API: ${error}`);
      return;
    }

    console.log(`User email being sent to Mailchimp audience: ${email}`);
  }

  return(
    <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input className={styles.emailInput} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className={styles.emailSubmit} type="submit" value="Sign up">
            Sign up
        </button>
    </form>
  );
}
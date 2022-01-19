import React from 'react';
import styles from './email-capture.module.css';

class EmailCapture extends React.Component {
   constructor(props) {
       super(props);

       this.state = {
           value: ''
       }

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }

    handleChange(e) {
      this.setState({value: e.target.value});
    }

    handleSubmit = async (e) => {
      e.preventDefault();
      const userEmail = this.state.value;
      console.log(`User email being sent to api: ---> ${userEmail}`);

      const response = await fetch('/api/email-list/subscribe.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userEmail)
      })
      const data = await response.json();
      console.log(`Data posted in email-capture: ${data}`);
      // TODO once email is saved, send a thank you back to the user
    }

  render() {
      return(
        <form className={styles.formContainer} onSubmit={this.handleSubmit}>
            <input className={styles.emailInput} type="email" placeholder="Email" value={this.state.value} onChange={this.handleChange} />
            <button className={styles.emailSubmit} type="submit" value="Sign up">
                Sign up
            </button>
        </form>
      );
  }
}

export default EmailCapture;
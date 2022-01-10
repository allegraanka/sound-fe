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

  handleSubmit(e) {
    // TODO send email to Mailchimp on submit
    alert('An email was submitted: ' + this.state.value);
    e.preventDefault();
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
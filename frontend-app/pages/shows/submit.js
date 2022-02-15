import Layout from '../../components/Layout/Layout';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/SubmitShow.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SubmitShowPage() {
    const [values, setValues] = useState({
        headliner: '',
        support: '',
        venue: '',
        date: '',
        showTime: '',
        doorTime: '',
        ticketPrice: '',
        description: ''
    })

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const hasEmptyFields = Object.values(values).some((element) => element === '');

        if (hasEmptyFields) {
            toast.error('Please complete every field.');
        }

        console.log('values', values);

        const res = await fetch('http://localhost:1337/api/submissions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: { 'data': values }
        });

        if (!res.ok) {
            toast.error('Something went wrong!');
        } else {
            const newShow = await res.json();
            console.log('new show', newShow);
        }
        
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({...values, [name]: value})
    }

    return (
        <Layout title='The Sound | Submit a show'>
            <div className={styles.container}>
                <Link href='/'>
                    <a className={`${styles.backButton} uk-button uk-button-text`}>← Back to home</a>
                </Link>
                <h1>Submit a show</h1>
                <ToastContainer />

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.grid}>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor='headliner'>Headlining band</label>
                            <input 
                                className={styles.input}
                                type='text' 
                                id='headliner' 
                                name='headliner'
                                placeholder='Enter headlining band'
                                value={values.headliner} 
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor='support'>Support band(s)</label>
                            <input 
                                className={styles.input}
                                type='text' 
                                id='support' 
                                name='support'
                                placeholder='Enter support band(s)'
                                value={values.support} 
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor='venue'>Venue</label>
                            <input 
                                className={styles.input}
                                type='text' 
                                id='venue' 
                                name='venue'
                                placeholder='Enter venue name'
                                value={values.venue} 
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor='date'>Date</label>
                            <input 
                                className={styles.input}
                                type='date' 
                                id='date' 
                                name='date'
                                value={values.date} 
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor='showTime'>Show time</label>
                            <input 
                                className={styles.input}
                                type='text' 
                                id='showTime' 
                                name='showTime'
                                placeholder='Enter show time'
                                value={values.showTime} 
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor='doorTime'>Door time</label>
                            <input 
                                className={styles.input}
                                type='text' 
                                id='doorTime' 
                                name='doorTime'
                                placeholder='Enter door time'
                                value={values.doorTime} 
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor='ticketPrice'>Ticket price</label>
                            <input 
                                className={styles.input}
                                type='text' 
                                id='ticketPrice' 
                                name='ticketPrice'
                                placeholder='Enter ticket price'
                                value={values.ticketPrice} 
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className={styles.textareaContainer}>
                        <label className={styles.label} htmlFor='description'>Description / Additional Info</label>
                        <textarea 
                            className={styles.textarea} 
                            id='description' 
                            name='description'
                            value={values.description} 
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <input type='submit' value='Submit show' className={`uk-button uk-button-secondary`}/>
                </form>
            </div>
        </Layout>
    );
}
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa'

export default function Search() {
    const [term, setTerm] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/shows/search?term=${term}`);
        setTerm('');
    }

    return(
        <div className={`w-full flex justify-center`}>
            <form className={`px-8`} onSubmit={handleSubmit}>
                <h2 className={``}>Looking for something?</h2>
                <span className={``}>
                    <input 
                        className={``} 
                        type="text" 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        placeholder={`Search shows`}>
                    </input>
                </span>
                <input className={`mx-2 hover:cursor-pointer`} type='submit' value='Go →'></input>
            </form>
        </div>
    );
}
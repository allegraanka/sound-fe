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
        <div className={styles.searchContainer}>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <span className={styles.relativeContainer}>
                    <input 
                        className={styles.searchInput} 
                        type="text" 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        placeholder={`Search shows`}>
                    </input>
                    <span className={styles.absoluteContainer}>
                        <FaSearch />
                    </span>
                </span>
            </form>
        </div>
    );
}
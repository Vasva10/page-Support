import type { FC } from 'react'
import styles from './Footer.module.css'
export const Footer: FC = () => {
    return (
        <footer className="footer">
            <span className={styles.text}>Info about the page</span>
        </footer>
    );
}
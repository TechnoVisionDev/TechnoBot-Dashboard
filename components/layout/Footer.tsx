import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#5779ff', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#57a5ff', stopOpacity: 1}} />
                </linearGradient>
                <path fill="url(#grad)" fillOpacity="1" d="M0,32L34.3,32C68.6,32,137,32,206,58.7C274.3,85,343,139,411,170.7C480,203,549,213,617,202.7C685.7,192,754,160,823,133.3C891.4,107,960,85,1029,112C1097.1,139,1166,213,1234,224C1302.9,235,1371,181,1406,154.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                </path>
            </svg>
        </footer>
    );
}

export default Footer;
// components/Header.js
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>BINANCE</div>
            <nav className={styles.nav}>
                <a href="#">Mua Crypto</a>
                <a href="#">Thị trường</a>
                <a href="#">Giao dịch</a>
                <a href="#">Futures</a>
                <a href="#">Earn</a>
                <a href="#">Square</a>
                <a href="#">Nhiều hơn</a>
            </nav>
            <div className={styles.icons}>
                <button className={styles.button}>Nap</button>
                <i className="fas fa-search"></i>
                <i className="fas fa-user"></i>
                <i className="fas fa-wallet"></i>
                <i className="fas fa-bell"></i>
                <i className="fas fa-globe"></i>
                <i className="fas fa-moon"></i>
            </div>
        </header>
    );
}

export default Header;

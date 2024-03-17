import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <h1>MaiaFlix</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">Contato</a>
            </nav>
        </header>
    )
}

export default Header
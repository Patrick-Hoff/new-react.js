import styles from "./Banner.module.css"

function Banner() {
    return (
        <div
        className={styles.banner}
        style={ { backgroundImage: "url(https://img.freepik.com/vetores-premium/cartaz-de-estreia-de-cinema-filme-com-tela-branca-fundo_165143-451.jpg)" } }
        >

        </div>
    );
}

export default Banner
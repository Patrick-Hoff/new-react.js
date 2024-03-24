import styles from "./Card.module.css"

function Card() {
    return (
        <section className={styles.card}>
            <a 
            href="https://www.youtube.com/watch?v=B_nq7VTJZds"
            target="_Blank"
            >
                <img src="https://img.youtube.com/vi/B_nq7VTJZds/maxresdefault.jpg" target="_Blank"/>
            </a>
        </section>
    )
}

export default Card
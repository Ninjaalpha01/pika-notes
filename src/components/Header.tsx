import styles from "./styles/MainContent.module.css"

export default function Header() {
    return (
        <div className={styles.note_header}>
            <h1>Título: </h1>
            <h3>Categoria - data</h3>
        </div>
    )
}
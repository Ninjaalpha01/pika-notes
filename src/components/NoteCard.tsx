import { Card } from "@mui/material";

import styles from "./styles/MainContent.module.css"

export default function NoteCard() {
    return (
        <div className={styles.note_space}>
            <Card className={styles.card}>
                teste
            </Card>
        </div>
    )
}
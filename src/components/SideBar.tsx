import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar"
import { useEffect, useState } from "react"
import { TbFilePlus, TbEdit } from "react-icons/tb"

import styles from "./styles/SideBar.module.css"
import logo from "../assets/pika-logo.png"
import logoWow from "../assets/pika-wow.png"
import { IconButton } from "@mui/material"

export default function SideBar() {
    const { collapseSidebar, collapsed } = useProSidebar();
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/note', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setNotes(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Sidebar collapsedWidth="100px" backgroundColor="#ffaf01" style={{ border: "none" }} >
            {PikaLogo()}
            {ButtonRow()}
            {/* <div className={styles.searchBar}>
                Pesquisa
            </div> */}
            {NoteList()}
        </Sidebar>
    )

    function PikaLogo() {
        return (
            <div className={styles.logoBar} onClick={() => collapseSidebar()}>
                {collapsed
                    ? <img src={logo} alt="logo" width="20px" />
                    : <img src={logoWow} alt="logo" width="40px" />}
            </div>
        )
    }

    function ButtonRow() {
        return (
            <div style={{borderBottom: "1px solid black"}}>
                {collapsed
                    ? <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        test
                    </div>

                    : <div className={styles.buttonRow}>
                        <IconButton className={styles.icon_button}>
                            <TbFilePlus className={styles.icon}/>
                        </IconButton>
                        <IconButton className={styles.icon_button}>
                            <TbEdit className={styles.icon}/>
                        </IconButton>
                        <IconButton className={styles.icon_button}>

                        </IconButton>
                        <IconButton className={styles.icon_button}>

                        </IconButton>
                    </div>
                }
            </div>
        )
    }

    function NoteList() {
        return (
            <Menu>
                {notes.length > 0 &&
                    notes.map((note: any) => (
                        <MenuItem key={note.id} className={styles.item} style={{ backgroundColor: "inherit" }}>
                            {note.title}
                        </MenuItem>
                    ))}
            </Menu>
        )
    }
}
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar"
import { useEffect, useState } from "react"

import styles from "./styles/SideBar.module.css"
import logo from "../assets/pika-logo.png"
import logoWow from "../assets/pika-wow.png"

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
        <Sidebar collapsedWidth="100px" style={{border: "none", backgroundColor: "black"}} >
            <div className={styles.logoBar} onClick={() => collapseSidebar()} >
                {
                    collapsed
                        ? <img src={logo} alt="logo" width="20px" />
                        : <img src={logoWow} alt="logo" width="40px" />
                }
            </div>
            <div className={styles.searchBar}>
                Pesquisa
            </div>
            <Menu>
                {
                    notes.length > 0 &&
                    notes.map((note: any) => (
                        <MenuItem key={note.id} className={styles.item} >{note.title}</MenuItem>
                    ))
                }
            </Menu>
        </Sidebar>
    )
}
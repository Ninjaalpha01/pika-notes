import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar"
import styles from "./styles/SideBar.module.css"

export default function SideBar() {
    return (
        <Sidebar>
            <div className={styles.searchBar}>
                Pesquisa
            </div>
            <Menu>
                <MenuItem>Dashboard</MenuItem>
                <MenuItem>Components</MenuItem>
                <MenuItem>Forms</MenuItem>
                <MenuItem>Tables</MenuItem>
            </Menu>
        </Sidebar>
    )
}
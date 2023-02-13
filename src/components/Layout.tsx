import Sidebar from './SideBar';

import styles from "./styles/MainContent.module.css"

function Layout({ children }: any) {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar />
            <main className={styles.layout}>
                {children}
            </main>
        </div>
    )
}

export default Layout;
import Sidebar from './SideBar';

function Layout({ children }: any) {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar />
            <main style={{ display: 'inline', width: '100vw', height: '100vh', overflowY: 'auto', backgroundColor: "rgb(80, 80, 80)", color: "white" }}>
                {children}
            </main>
        </div>
    )
}

export default Layout;
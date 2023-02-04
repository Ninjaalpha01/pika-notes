import Sidebar from './SideBar';

function Layout({ children }: any) {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar />
            <div style={{ display: 'inline', width: '100vw', height: '100vh', overflowY: 'auto' }}>
                <main style={{ display: "flex", backgroundColor: "rgb(240, 242, 245)" }}>{children}</main>
            </div>
        </div>
    )
}

export default Layout;
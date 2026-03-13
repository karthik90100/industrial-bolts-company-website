import Navbar from '../navbar'
import Header from '../header'
import Footer from '../footer'
import { Outlet } from 'react-router-dom'
function Layout() {
    return (
        <>
            <header className="sticky top-0 z-50">
                <Header />
                <Navbar />
            </header>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout

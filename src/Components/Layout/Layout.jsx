import React from 'react';
import Navbar  from '../Navs/Navs';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main >
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;

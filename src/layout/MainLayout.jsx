import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
            {/* footer section */}
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;
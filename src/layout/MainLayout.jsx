import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../pages/Loading';

const MainLayout = () => {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <header className='sticky z-50 top-0'>
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
import React from 'react'
import Home from '../pages/home'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';

const layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />

        </div>
    )
}

export default layout
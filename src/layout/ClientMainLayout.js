import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../page/Shared/Footer/Footer';
import Header from '../page/Shared/Header/Header';

const ClientMainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ClientMainLayout;
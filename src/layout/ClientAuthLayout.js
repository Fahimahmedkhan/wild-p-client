import React from 'react';
import { Outlet } from 'react-router-dom';

const ClientAuthLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default ClientAuthLayout;
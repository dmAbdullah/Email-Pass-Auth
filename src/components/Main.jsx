import React from 'react';
import { Outlet } from 'react-router-dom';
import Hader from './Hader';

const Main = () => {
    return (
        <div>
            <Hader/>
            <Outlet/>
        </div>
    );
};

export default Main;
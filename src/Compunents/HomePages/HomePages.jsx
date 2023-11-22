import React from 'react';
import { Outlet } from 'react-router-dom';
import Haeder from '../Haeder/Haeder';

const HomePages = () => {
    return (
        <div>

            <Haeder ></Haeder>
           <Outlet></Outlet>
        </div>
    );
};

export default HomePages;
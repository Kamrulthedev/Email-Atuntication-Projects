import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import HomePages from '../HomePages/HomePages';
import Reister from '../Reister/Reister';

const RootRouter = createBrowserRouter([
    {
       path:'/',
       element:<HomePages></HomePages>,
       children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/Login',
            element:<Login></Login>
        },
        {
            path:'/Reister',
            element:<Reister></Reister>
        }
       ]
    }
]) 
 

export default RootRouter;
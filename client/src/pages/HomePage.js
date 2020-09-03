import React from 'react';

import { Redirect } from 'react-router-dom'
import {useSelector} from 'react-redux';
import NavBar from '../components/sitewide/NavBar'
//import SiteHeader from '../components/sitewide/SiteHeader';


function HomePage(){
    const isLoggedIn = useSelector (state => !!state.auth.id);
    

    if(!isLoggedIn) return <Redirect to='/login'></Redirect>

   return(
       <>
       <NavBar></NavBar> 
       <div className="main-content" />
      </>
   )

}
export default HomePage;
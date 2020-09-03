import React from 'react';
import LogoutButton from './LogoutButton';
import { Redirect } from 'react-router-dom'
import {useSelector} from 'react-redux';

function HomePage(){
    const isLoggedIn = useSelector (state => !!state.auth.id);
    

    if(!isLoggedIn) return <Redirect to='/login'></Redirect>

   return(
       <>
       <div className="temp-header">
            <h1>readMore</h1> 
            <LogoutButton />
       </div>
       </>  
   )

}
export default HomePage;
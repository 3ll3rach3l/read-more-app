import React from 'react';
import LogoutButton from './LogoutButton';
import { Redirect } from 'react-router-dom'
import {useSelector} from 'react-redux';

function HomePage(){
    const isLoggedIn = useSelector (state => !!state.auth.id);
    

    if(!isLoggedIn) return <Redirect to='/login'></Redirect>

   return(
       <>
        <h1>Welcome Home!</h1>
        <LogoutButton />
       </>  
   )

}
export default HomePage;
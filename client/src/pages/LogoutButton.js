import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/auth';
import Cookies from 'js-cookie';


function LogoutButton() {
    const dispatch = useDispatch();

    const handleClick = async (e) => {
        const res = await dispatch(logout())
        //debugger
        if (res.ok) Cookies.remove('token')
       
        console.log("this is res in logoutbutton.js", res)
            
    }

  return (
    <div id="logout-button">
      <button onClick={handleClick}> Logout </button>
    </div>
  );
}

export default LogoutButton;

import React from 'react';

import { Redirect } from 'react-router-dom'
import {useSelector} from 'react-redux';
import NavBar from '../components/sitewide/NavBar'
import Countdown from '../components/Countdown'


function HomePage(){
    const isLoggedIn = useSelector (state => !!state.auth.id);
    

    if(!isLoggedIn) return <Redirect to='/login'></Redirect>

   return(
       <>
       <NavBar/>
       <main className="homepage-main">
           <div className="banner-year">
               <img className="book-img" alt="empty"/>
               <div className="year">
                   <span>2020 READING<br/> </span>
                   <span>CHALLENGE</span>
               </div>
           </div>
           <div className="countdown-container">
               <Countdown />
           </div>

       </main>
      </>
   )

}
export default HomePage;
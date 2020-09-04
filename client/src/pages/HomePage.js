import React from 'react';

import { Redirect } from 'react-router-dom'
import {useSelector} from 'react-redux';
import NavBar from '../components/sitewide/NavBar'
import Countdown from '../components/Countdown'
import './cssPages/HomePage.css'

function HomePage(){
    const isLoggedIn = useSelector (state => !!state.auth.id);
    

    if(!isLoggedIn) return <Redirect to='/login'></Redirect>

   return(
       <>
       <NavBar/>
       <main className="homepage-main">
           <div className="banner">
            <div className="banner-year">
                       <img className="book-img" 
                       src="https://s.gr-assets.com/assets/challenges/yearly/img_RCBook-626ef5100b911207af0c4d84f02df03a.svg" 
                       alt="empty"/>
                <div className="year">
                    <span>
                    2020 READING
                    <br/>
                    CHALLENGE
                    </span>
                </div>
            <div className="countdown-container">
                <h2>Time Remaining:</h2>
                <Countdown />
            </div>
            </div>
           </div>

       </main>
      </>
   )

}
export default HomePage;
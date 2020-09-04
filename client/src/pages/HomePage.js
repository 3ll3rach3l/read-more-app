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
       <main className="homepage-main">
           <div className="banner-year">
               <img className="book-img"/>
               <div className="year">
                   <span>2020 READING<br/> </span>
                   <span>CHALLENGE</span>
               </div>
           </div>
           <div className="challengeStatsContainer2">

           </div>

       </main>
      </>
   )

}
export default HomePage;
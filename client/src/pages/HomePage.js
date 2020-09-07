import React from 'react';

import { Redirect } from 'react-router-dom'
import {useSelector} from 'react-redux';
import NavBar from '../components/sitewide/NavBar'
import Banner from '../containers/Banner'
import './cssPages/HomePage.css'
import ChallengeDashboard from '../components/challenge/ChallengeDashboard';

function HomePage(){
    const isLoggedIn = useSelector (state => !!state.auth.id);
    

    if(!isLoggedIn) return <Redirect to='/login'></Redirect>

   return(
       <>
       <NavBar/>
       <main className="homepage-main">
           <div className="mainContent">
               <div className="mainContent-float">
                   <Banner></Banner>
                     <div className="challenge2020">
                         <div className="leftContainer">
                             <ChallengeDashboard/>
                         </div>
                     </div>
                     <div className="rightContainer"></div>
                </div>
            </div>
       </main>
      </>
   )

}
export default HomePage;
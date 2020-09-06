import React from 'react';

import './ChallengeDashboard.css'
import ChallengeProgressUser from './ChallengeProgressUser';
import ChallengeProgress from './ChallengeProgress';


const ChallengeDashboard = () =>{

return(
        <div className="readingChallengeDashboard" id="readingChallenge2020Dashboard">
            <div className="challengeBanner">
                <div className="challengeBannerContent">
                    <div className="challengeProgressUser">
                        <ChallengeProgressUser />
                    </div>
                    <div className="challengeProgress">
                        <ChallengeProgress />
                    </div>
                </div>

            </div>

        </div>

)

}


export default ChallengeDashboard;
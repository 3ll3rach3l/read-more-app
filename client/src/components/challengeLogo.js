import React from 'react';
import './ChallengeLogo.css'


const ChallengeLogo = () =>{


    return(
        <div className="readingChallengeBadge">
            <div className="badgeYear">
                <span className="yearHeader">
                    2020
                </span>
                <img className="bookImg"
                    src="https://s.gr-assets.com/assets/challenges/yearly/img_RCBook-626ef5100b911207af0c4d84f02df03a.svg"
                    alt="2020 Reading Challenge" 
                />
                <div className="challengeText">
                    <div className="challengeText--reading">
                        READING
                    </div>
                    <div>
                        CHALLENGE
                    </div>
                </div>
            </div>
        </div>
    )


}

export default ChallengeLogo;
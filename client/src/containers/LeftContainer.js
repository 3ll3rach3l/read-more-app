import React from 'react';


const LeftContainer = () =>{

return(
    <div className="leftContainer">
        <div className="readingChallengeDashboard">
            <div className="challengeBanner">
                <div className="challengeBannerContent">
                    <div className="challengeProgressUser">
                        <p>user avi goes here</p>
                    </div>
                    <div className="challengeProgress">
                        <div className="challengeProgressBarProfile">
                           <div className="challengeProgressBarHeader">
                               <span className="challengeProgressMessage">
                                   YOU HAVE READ X OF X BOOKS. <br/>
                                   MAKE SURE TO ADD EDIT FEATURE HERE!
                               </span>
                            </div>
                            <div className="challengeProgressBar"></div> 
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>
)

}


export default LeftContainer;
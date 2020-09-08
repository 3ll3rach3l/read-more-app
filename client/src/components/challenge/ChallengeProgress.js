import React from 'react';
import './ChallengeProgress.css'

const ChallengeProgress = () =>{
    

    return(

        <div className="challengeProgress">
            <div className="challengeProgressBarProfile">
                <div className="challengeProgressBarHeader">
                    <div className="challengeProgressMessage">
                        You have read X of X books. <br />
                         {/* <div className="editChallengeAction">Edit</div> */}
                    </div>
                </div>
                <div className="challengeProgressBar">
                    <div className="graphContainer">
                        <div className="graphBarFiller">GRAPH BAR GOES HERE</div>
                        <div className="progressStats secondaryCopy"> PERCENTAGE </div>
                    </div>
                    <div className="progressReport">

                    </div>
                </div>
            </div>

        </div>
    )

}

export default ChallengeProgress;

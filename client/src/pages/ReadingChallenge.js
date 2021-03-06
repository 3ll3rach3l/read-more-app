import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import ChallengeButton from '../components/ChallengeButton';
import ChallengeLogo from '../components/ChallengeLogo';
import './cssPages/ReadingChallenge.css'
import history from '../store/history';
import { addGoal } from '../store/actions/challengeActions';


const ReadingChallenge = () =>{
    const [goal, setGoal] = useState('');

    const dispatch = useDispatch()

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.value)  //undefined
        dispatch(addGoal(goal))
        
    }

    const handleClick = e =>{
   
        console.log("this is in clicked", e.target.value) //undefined
        history.push('/')
       
    }

    

    return(
        <>
        <div className="site-header-div">
            <header className="site-header">
                <div className="site-header-contents">
                    <div className="site-header-logo">
                        <h1 className="site-header-logo">readMore</h1>
                    </div>
                </div>
            </header>
        </div>
        
            <div className="goalContent">
                <h1 className="pageTitle">
                    Set a Reading Goal!
                </h1>
                <div className="goalNotice">
                    <p className="mediumText">
                        Tell readMore how many books you want to read this year,
                        and we'll help you stay on track!
                    </p>
                </div>
                <table className="readingChallengeSignup">
                    <tbody>
                        <tr>
                            <td>
                                <ChallengeLogo></ChallengeLogo>
                            </td>
                            <td className="smallHbreak"></td>
                            <td className="readingChallengeForm">
                                <form className="challengeForm" onSubmit={handleSubmit}>
                                    <div className="goalSetting">
                                        <div className="errors-container">
                                            <ul className="errors" id="goal-errors"></ul>
                                        </div>
                                        <div className="smallVBreak"></div>
                                        I want to read
                                        <input 
                                        className="inputNumber"
                                        type="number"
                                        value={goal}
                                        onChange={(e) => setGoal(e.target.value)}
                                        placeholder="#"/>
                                        books in 2020.
                                    </div>
                                    <ChallengeButton onClick={handleClick}>Take the Challenge</ChallengeButton>
                                </form>
                            </td>
                            <td className="smallHBreak"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
       
    </>


    )

}


export default ReadingChallenge;
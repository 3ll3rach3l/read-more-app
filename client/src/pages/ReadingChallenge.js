import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import AuthSubmitButton from '../components/auth/AuthSubmitButton';


const ReadingChallenge = () =>{
    const [goal, setGoal] = useState('');

    const dispatch = useDispatch()

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch(setGoal(goal))
    }

    return(
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
                    <td>
                        <div>INSERT CHALLENGE LOGO HERE, REPLACE THIS DIV TOO</div>
                    </td>
                    <td className="readingChallengeForm">
                        <form className="challengeForm">
                            <div className="goalSetting">
                                <div className="errors-container">
                                    <ul className="errors" id="sign-up-errors"></ul>
                                </div>
                                <div className="smallVBreak"></div>
                                I want to read
                                <input 
                                className="inputNumber"
                                type="number"
                                name="user_challenge[goal]"
                                placeholder="#"/>
                                books in 2020.
                            </div>
                            <AuthSubmitButton>Take the Challenge</AuthSubmitButton>
                            
                        </form>
                    </td>
                </tbody>
            </table>
        </div>


    )

}


export default ReadingChallenge;
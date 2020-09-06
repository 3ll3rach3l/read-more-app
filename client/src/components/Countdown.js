import React, {useEffect, useState} from 'react';
import './Countdown.css'


const Countdown = () => {

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`12/31/${year}`) - +new Date()
    
        let timeLeft = {};
    
        if(difference > 0){
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                //seconds: Math.floor((difference/ 1000) % 60)
            };
        }
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
   //const [year] = useState(new Date().getFullYear());

    useEffect(() =>{
        
        const timer = setTimeout(() =>{
            setTimeLeft(calculateTimeLeft())
        }, 1000);
        return () => clearTimeout(timer)
    }, []);

    const timerComponents = [];

   Object.keys(timeLeft).forEach(interval =>{
        if(!timeLeft[interval]) return
     
        timerComponents.push(
            <span>{timeLeft[interval]} {interval}{" "}<br/></span>
        )
    });

   

    return(
        <div className="countdown-clock">
            {timerComponents.length ? timerComponents : <span>Time's Up!</span>}
        </div>
    )

}


export default Countdown;
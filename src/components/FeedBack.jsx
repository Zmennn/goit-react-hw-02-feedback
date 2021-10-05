import { Component } from "react";
import React from "react";
import style from "./FeedBack.module.css";
import Buttons from "./Buttons"

class FeedBack extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    addGood = () => {
        this.setState(prevState => ({ good: prevState.good + 1 }))
    };
    addNeutral = () => {
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }))
    };
    addBad = () => {
        this.setState(prevState => ({ bad: prevState.bad + 1 }))
    };
    

    render() {

        const { good, neutral, bad } = this.state;

        const countTotalFeedback =good + neutral + bad;
           
        const countPositiveFeedbackPercentage =Math.round( good/countTotalFeedback*100)
            

        return (<>
            <div className={style.title}>Please leave feedback</div>
            
            {/* <Buttons/> */}

            <div className={style.title}>Statistic</div>
            <div className={style.resultString}>Good:{good}</div>
            <div className={style.resultString}>Neutral:{this.state.neutral}</div>
            <div className={style.resultString}>Bad:{this.state.bad}</div>
            <div className={style.resultString}>Total:{countTotalFeedback}</div>
            <div className={style.resultString}>Positive:{countPositiveFeedbackPercentage?countPositiveFeedbackPercentage:0}</div>
        </>
        );
    }
}

export default FeedBack  
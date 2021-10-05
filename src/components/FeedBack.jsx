import { Component } from "react";
import React from "react";
import style from "./FeedBack.module.css"

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
    countTotalFeedback = () => {
        this.setState(prevState => { return ({ totalFeedback:prevState.good+prevState.neutral+prevState.bad })})
    }

    render() {
        return (<>
            <div className={style.title}>Please leave feedback</div>
            <button className={style.button} type="button" onClick={this.addGood}>Good</button>
            <button className={style.button} type="button" onClick={this.addNeutral}>Neutral</button>
            <button className={style.button} type="button" onClick={this.addBad}>Bad</button>
            <div className={style.title}>Statistic</div>
            <div className={style.resultString}>Good:{this.state.good}</div>
            <div className={style.resultString}>Neutral:{this.state.neutral}</div>
            <div className={style.resultString}>Bad:{this.state.bad}</div>
            <div className={style.resultString}>Total:{this.state.totalFeedback}</div>
            <div className={style.resultString}>Positive:{this.state.good}</div>
        </>
        );
    }
}

export default FeedBack  
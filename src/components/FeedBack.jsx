import { Component } from "react";
import React from "react";

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
        return (<>
            <div>Please leave feedback</div>
            <button type="button" onClick={this.addGood}>Good</button>
            <button type="button" onClick={this.addNeutral}>Neutral</button>
            <button type="button" onClick={this.addBad}>Bad</button>
            <div>Statistic</div>
            <div>Good:{this.state.good}</div>
            <div>Neutral:{this.state.neutral}</div>
            <div>Bad:{this.state.bad}</div>
        </>
        );
    }
}

export default FeedBack  
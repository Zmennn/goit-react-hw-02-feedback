// import FeedBack from "./components/FeedBack.jsx"
import React, { Component } from "react";
import './App.css';
import style from "./components/FeedBack.module.css";
import Statistics from "./components/Statistic"
// import { Component } from 'react/cjs/react.production.min';

class App extends Component {
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

    const countTotalFeedback = good + neutral + bad;

    const countPositiveFeedbackPercentage = Math.round(good / countTotalFeedback * 100)


    return (<>
      <div className={style.title}>Please leave feedback</div>

      {/* <Buttons/> */}
      <FeedbackOptions
        options={ }
        onLeaveFeedback={ } />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage} />

    </>
    );
  }
}

export default App;


import React, { Component } from "react";
import './App.css';
import Section from "./components/Section";


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
      <Section
        title={"Please leave feedback"}
        options={this}
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      />
    </>
    );
  }
}

export default App;

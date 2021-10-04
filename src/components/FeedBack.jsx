import { Component } from "react";


class FeedBack extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

} render(){
    return (<>
        <div>Please leave feedback</div>
        <button type="button"></button>
        <button type="button"></button>
        <button type="button"></button>
        <div>Statistic</div>
        <div>Good:10</div>
        <div>Neutral:20</div>
        <div>Bad:3</div>

        </>
    )
}
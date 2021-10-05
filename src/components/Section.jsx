import style from "./FeedBack.module.css";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistic";
import Notification from "./Notification";

export default function Section({ title, options, good, neutral, bad, total, positivePercentage }) {
    return <>
        <h2 className={style.title}>{title}</h2>
        <FeedbackOptions
            options={options}
        />
        {(good || neutral || bad) ?
            (<Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage} />) :
            (<Notification message="No feedback given"/>)
           }
        </>

}



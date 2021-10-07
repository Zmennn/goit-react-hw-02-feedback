import style from "./FeedBack.module.css";
import React from "react";
import PropTypes from "prop-types";

export default function Statistic({ good, neutral, bad, total, positivePercentage }) {
    
    return <>
        <div className={style.title}>Statistic</div>
        <div className={style.resultString}>Good:{good}</div>
        <div className={style.resultString}>Neutral:{neutral}</div>
        <div className={style.resultString}>Bad:{bad}</div>
        <div className={style.resultString}>Total:{total}</div>
        <div className={style.resultString}>Positive:{positivePercentage ? positivePercentage : 0}</div>
    </>;
}


Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
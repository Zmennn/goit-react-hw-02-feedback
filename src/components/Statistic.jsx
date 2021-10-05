import style from "./FeedBack.module.css";

export default function Statistic({ good, neutral, bad, total, positivePercentage }) {
    {console.log(good, positivePercentage)}
    return<>
        <div className={style.title}>Statistic</div>
        <div className={style.resultString}>Good:{good}</div>
        <div className={style.resultString}>Neutral:{neutral}</div>
        <div className={style.resultString}>Bad:{bad}</div>
        <div className={style.resultString}>Total:{total}</div>
        <div className={style.resultString}>Positive:{positivePercentage ? positivePercentage : 0}</div>    
    </>
}
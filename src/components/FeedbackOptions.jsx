import style from "./FeedBack.module.css";

export default function FeedbackOptions({ options }) {
        return <>
        <button className={style.button} type="button" onClick={options.addGood}>Good</button>
        <button className={style.button} type="button" onClick={options.addNeutral}>Neutral</button>
        <button className={style.button} type="button" onClick={options.addBad}>Bad</button>
        </>
}
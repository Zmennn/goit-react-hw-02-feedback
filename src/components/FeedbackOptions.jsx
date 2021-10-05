import style from "./FeedBack.module.css";

export default function FeedbackOptions () { return<>
        <button className={style.button} type="button" onClick={this.addGood}>Good</button>
        <button className={style.button} type="button" onClick={this.addNeutral}>Neutral</button>
        <button className={style.button} type="button" onClick={this.addBad}>Bad</button></>
}
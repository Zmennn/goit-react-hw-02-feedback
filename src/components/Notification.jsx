import style from "./FeedBack.module.css";

export default function Notification({message}) {
  return  <div className={style.resultString}>{message}</div>
}
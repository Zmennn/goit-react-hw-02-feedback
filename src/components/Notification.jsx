import style from "./FeedBack.module.css";
import React from "react";
import PropTypes from "prop-types";

export default function Notification({message}) {
  return <div className={style.resultString}>{message}</div>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired
};


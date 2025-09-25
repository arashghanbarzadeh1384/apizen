import React from "react";
import styles from "./Button.module.css";

interface Text {
  text: string;
}

const Button = ({text} : Text) => {
  return <button className={styles.button2}>{text}</button>;
};

export default Button;

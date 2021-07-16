import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={`${!props.dark ? classes.DarkCard : classes.Card}`} >{props.children}</div>;
};

export default Card;

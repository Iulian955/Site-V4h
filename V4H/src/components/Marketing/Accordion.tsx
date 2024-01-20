import React, { useEffect, useState } from "react";
import { uniqueId } from "lodash";
import ReactGA from "react-ga4";
import styles from "./Accordion.module.scss";
import images from "../../data/images";
import { FaHandshakeAngle } from "react-icons/fa6";

interface cardBoardProps {
  theQuestion: QuestionData;
  onClick: () => void;
}
interface QuestionData {
  question: string;
  answer: React.ReactNode;
}
const Accordion = ({ theQuestion, onClick }: cardBoardProps) => {
  const [cardboardOpen, setCardOn] = useState<boolean>(false);
  useEffect(() => {
    setCardOn(false); // Reset state when the question changes
  }, [theQuestion.question]);
  const clickHandler = () => {
    onClick();
    setCardOn(!cardboardOpen);
    ReactGA.event(`user_FAQ_clickedQuestion_${theQuestion.question.substring(0, 16)}`);
  };

  return (
    <div onClick={clickHandler} className={cardboardOpen ? styles.questionCard : styles.collapsed}>
      <div className={styles.primaryLine}>
        <div className={styles.questionIcon}>
          <p className={cardboardOpen ? styles.orange : styles.questionText}>{theQuestion.question}</p>
        </div>
        <div className={styles.detailsPadder}>
          {cardboardOpen ? (
            <img className={styles.pinkArrowDown} src={images.homepage.plus} />
          ) : (
            <img className={styles.pinkArrowDown} src={images.homepage.plus} />
          )}
        </div>
      </div>
      <div className={styles.answerArea}>{theQuestion.answer}</div>
    </div>
  );
};

export default Accordion;

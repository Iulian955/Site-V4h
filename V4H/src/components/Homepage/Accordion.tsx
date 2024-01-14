import React, { useState } from "react";
import { uniqueId } from "lodash";
import ReactGA from "react-ga4";
import styles from "./Accordion.module.scss";
import images from "../../data/images";
import { FaHandshakeAngle } from "react-icons/fa6";

interface cardBoardProps {
  theQuestion: QuestionData;
}
interface QuestionData {
  question: string;
  answer: string;
}
const Accordion = ({ theQuestion }: cardBoardProps) => {
  const [cardboardOpen, setCardOn] = useState<boolean>(false);
  const clickHandler = () => {
    setCardOn(!cardboardOpen);
    ReactGA.event(`user_FAQ_clickedQuestion_${theQuestion.question.substring(0, 16)}`);
  };

  return (
    <div onClick={clickHandler} className={cardboardOpen ? styles.questionCard : styles.collapsed}>
      <div className={styles.primaryLine}>
        <div className={styles.questionIcon}>
          <FaHandshakeAngle className={cardboardOpen ? styles.handshakeWhite : styles.handshakeOrange} />
          <p className={cardboardOpen ? styles.orange : styles.questionText}>{theQuestion.question}</p>
        </div>
        <div className={styles.detailsPadder}>
          {cardboardOpen ? (
            <img className={styles.pinkArrowDown} src={images.homepage.minus} />
          ) : (
            <img className={styles.pinkArrowDown} src={images.homepage.plus} />
          )}
        </div>
      </div>
      <div className={styles.answerArea}>
        <p className={cardboardOpen ? styles.activePop : styles.inactivePop}>{theQuestion.answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
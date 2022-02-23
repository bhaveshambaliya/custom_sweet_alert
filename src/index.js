import React from 'react'
import SuccessIcon from "./assets/img/success-icon.png";
import FailedIcon from "./assets/img/fail-icon.png";
import ConfirmationIcon from "./assets/img/confirmation-icon.png";
import styles from './styles.module.css'

export const CustomSweetAlert = ({ isOpen, type, title, infoText, onActionHandle }) => {
  let titleIcon = SuccessIcon;
  if (type === "confirm") {
    titleIcon = ConfirmationIcon;
  }
  else if (type === "fail") {
    titleIcon = FailedIcon
  }
  else {
    titleIcon = SuccessIcon;
  }
  return (
    <div className={styles.customAlertMain}>
      <div class={isOpen ? styles.customAlertBox : styles.customAlertBoxOff} id="modal">
        <div className={styles.customAlertTitle}>
          <div className={styles.customAlertTitleIconStyle}>
            <img src={titleIcon} alt="icon not found" className={styles.customAlertTitleIconStyleImg} />
          </div>
          <div className={styles.customAlertTitleTextStyle}>{title && title !== "" ? title : "Alert Title"}</div>
        </div>
        <div className={styles.customAlertContent}>
          {infoText && infoText !== "" ? infoText :
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti,ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo   accusantium nihil doloremque consequuntur."}
        </div>
        <div className={styles.customAlertActions}>
          <button className={styles.customAlertActionsRequestBtn} onClick={() => onActionHandle(true)} >OK</button>
          {type === "confirm" && <button className={styles.customAlertActionsRequestCancelBtn}  onClick={() =>onActionHandle(false)} >CANCEL</button>}
        </div>
      </div>
    </div>
  )
}

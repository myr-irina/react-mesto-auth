import SuccessIcon from "../images/SuccessIcon.svg";
import FailIcon from "../images/FailIcon.svg";
import closeIcon from "../images/CloseIcon.svg";
import React from "react";

function InfoToolTip({ isOpen, isRegSuccess, onClose }) {
  return (
    <div
      className={`popup popup_type_tooltip ${isOpen ? "popup_is-opened" : ""}`}
    >
      <div className="popup__content">
        {isRegSuccess ? (
          <>
            <img
              src={`${SuccessIcon}`}
              alt="Регистрация прошла успешно."
              className="popup__tooltip-image"
            />
            <p className="popup__tooltip-message">
              Вы успешно зарегистрировались!
            </p>
          </>
        ) : (
          <>
            <img
              src={`${FailIcon}`}
              alt="Регистрация не была выполнена."
              className="popup__tooltip-image"
            />
            <p className="popup__tooltip-message">
              Что-то пошло не так. Попробуйте ещё раз!
            </p>
          </>
        )}

        <button type="button" className="popup__close" onClick={onClose}>
          <img src={closeIcon} alt="кнопка закрытия попапа" />
        </button>
      </div>
    </div>
  );
}

export default InfoToolTip;

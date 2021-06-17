import React from 'react'
import closeIcon from '../images/CloseIcon.svg'

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__content">
        <button type="button" className="popup__close" onClick={props.onClose}>
          <img
            src={closeIcon}
            alt="кнопка закрытия попапа"
          />
        </button>
        <form className={`popup__field-form popup__field-form-${props.name}`} noValidate>         
          <h2 className="popup__heading">{props.title}</h2>
          {props.children}
          <button type="submit" className="popup__button" aria-label="Да">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  ); 
}

export default PopupWithForm
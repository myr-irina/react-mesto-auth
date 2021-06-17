import React from 'react'
import closeIcon from '../images/CloseIcon.svg'

function ImagePopup(props) {
  return(
    <div className={`popup popup_type_image ${props.card ? 'popup_is-opened' : ''}`}>    
      <div className="popup__content popup__content_content_image">
        <button type="button" className="popup__close">
          <img src={closeIcon} alt="кнопка закрытия попапа" onClick={props.onClose} />
        </button>
        <img className="popup__image" src={props.card.link} alt={props.card.name} />
        <p className="popup__caption">{props.card.name}</p>

      </div>
    </div>
  ) 
}


export default ImagePopup
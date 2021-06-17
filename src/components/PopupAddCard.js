import React from "react";
import PopupWithForm from "../components/PopupWithForm";

function PopupAddCard(props) {
  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        className="popup__field-input popup__field-input-description"
        name="name"
        type="text"
        autoComplete="off"
        id="field-input-description"
        placeholder="Название"
        required
      />
      <span className="popup__input-error" id="field-input-description-error">
        Вы пропустили это поле.
      </span>
      <input
        className="popup__field-input popup__field-input-link"
        type="url"
        name="link"
        autoComplete="off"
        id="field-input-link"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__input-error" id="field-input-link-error">
        Введите ссылку.
      </span>
    </PopupWithForm>
  );
}

export default PopupAddCard;

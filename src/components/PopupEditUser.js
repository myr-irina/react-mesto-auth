import React from "react";
import PopupWithForm from "../components/PopupWithForm";

function PopupEditUser(props) {
  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        className="popup__field-input popup__field-input-name"
        id="field-input-name"
        name="name"
        type="text"
        placeholder="Имя"
        autoComplete="off"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__input-error" id="field-input-name-error">
        Вы пропустили это поле.
      </span>
      <input
        className="popup__field-input popup__field-input-about"
        type="text"
        id="field-input-about"
        name="about"
        placeholder="О себе"
        autoComplete="off"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__input-error" id="field-input-about-error">
        Вы пропустили это поле.
      </span>
    </PopupWithForm>
  );
}

export default PopupEditUser
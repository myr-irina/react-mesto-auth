import React from "react";
import PopupWithForm from "../components/PopupWithForm";

function PopupEditAvatar(props) {
  return (
    <PopupWithForm
      name="update"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        className="popup__field-input popup__field-input-link"
        type="url"
        name="avatar"
        autoComplete="off"
        id="field-input-avatar"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__input-error" id="field-input-avatar-error">
        Введите ссылку.
      </span>
    </PopupWithForm>
  );
}

export default PopupEditAvatar
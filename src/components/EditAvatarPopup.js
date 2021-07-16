import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef("");

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    props.onClose();
    avatarRef.current.value = '';
  }

  return (
    <PopupWithForm
      name="update"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
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

export default EditAvatarPopup;

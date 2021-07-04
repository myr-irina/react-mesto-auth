import React from "react"
import PopupWithForm from "./PopupWithForm"
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function EditProfilePopup(props){
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about)
  }, [currentUser, props.isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  } 
  

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__field-input popup__field-input-name"
        id="field-input-name"
        name="name"
        value={name || ''}
        type="text"
        placeholder="Имя"
        autoComplete="off"
        minLength="2"
        maxLength="40"
        required
        onChange={handleChangeName}
      />
      <span className="popup__input-error" id="field-input-name-error">
        Вы пропустили это поле.
      </span>
      <input
        className="popup__field-input popup__field-input-about"
        type="text"
        id="field-input-about"
        name="about"
        value={description || ''}
        placeholder="О себе"
        autoComplete="off"
        minLength="2"
        maxLength="200"
        required
        onChange={handleChangeDescription}
      />
      <span className="popup__input-error" id="field-input-about-error">
        Вы пропустили это поле.
      </span>
    </PopupWithForm>
  );

} 


export default EditProfilePopup

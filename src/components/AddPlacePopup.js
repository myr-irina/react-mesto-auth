import React from "react"
import PopupWithForm from "./PopupWithForm"

function AddPlacePopup(props) {
  const [title, setTitle] = React.useState('')
  const [link, setLink] = React.useState('')

  
  function handleChangeTitle(e) {
    setTitle(e.target.value)
  }

  function handleChangeLink(e) {
    setLink(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    props.onAddCard({
      name: title,
      link: link
    });
  }

  React.useEffect(() => {
    setTitle('')
    setLink('')
  }, [props.isOpen])


  return(
    <PopupWithForm
    name="card"
    title="Новое место"
    buttonText="Создать"
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleSubmit}
  >
    <input
      className="popup__field-input popup__field-input-description"
      name="name"
      type="text"
      autoComplete="off"
      id="field-input-description"
      placeholder="Название"
      required
      value={title || ''}
      onChange={handleChangeTitle}
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
      value={link || ''}
      onChange={handleChangeLink}
    />
    <span className="popup__input-error" id="field-input-link-error">
      Введите ссылку.
    </span>
  </PopupWithForm>
  )
}

export default AddPlacePopup
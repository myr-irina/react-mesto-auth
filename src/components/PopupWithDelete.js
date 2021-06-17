import React from 'react'
import PopupWithForm from '../components/PopupWithForm'

function PopupWithDelete() {
  return (
    <PopupWithForm name="delete" title="Вы уверены" buttonText="Да"></PopupWithForm>
  );
}

export default PopupWithDelete
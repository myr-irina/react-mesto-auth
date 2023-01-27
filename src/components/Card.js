import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `elements__button-trash ${
    isOwn ? 'elements__button-trash' : 'elements__button-trash_hidden'
  }`;

  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = `elements__button ${
    isLiked ? 'elements__button_active' : ''
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <li className="elements__list-item">
      <img
        className="elements__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <button
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}
      ></button>
      <div className="elements__block">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-group">
          <button
            className={cardLikeButtonClassName}
            type="submit"
            onClick={handleLikeClick}
          ></button>
          <div className="elements__like-count">{props.card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}

export default Card;

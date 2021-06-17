import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="elements__list-item">
      <img className="elements__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
        <button
        className="elements__button-trash elements__button-trash_hidden"
        type="button"
      ></button>
      <div className="elements__block">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-group">
          <button className="elements__button" type="submit"></button>
          <div className="elements__like-count">{props.card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}

export default Card
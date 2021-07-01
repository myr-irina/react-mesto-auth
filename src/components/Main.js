import React from "react";
// import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="page__container">
      <section className="profile page__profile">
        <div className="profile__container">
          <div className="profile__avatar-block">
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="аватар пользователя"
            />
            <button
              className="profile__avatar-button"
              onClick={props.onEditAvatar}
            />
          </div>

          <div className="profile__info-block">
            <div className="profile__edit-block">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button
                type="button"
                id="show-popup"
                className="profile__edit-button"
                aria-label="кнопка редактирования"
                onClick={props.onEditProfile}
              />
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
        </div>

        <button
          className="profile__button"
          type="submit"
          id="show-card-popup"
          onClick={props.onAddPlace}
        />
      </section>

      <section className="elements page__elements">
        <ul className="elements__list">
          {props.cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Main;

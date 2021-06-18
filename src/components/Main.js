import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setuserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setuserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(initialCards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <body className="page">
      <div className="page__container">
        <section className="profile page__profile">
          <div className="profile__container">
            <div className="profile__avatar-block">
              <img
                className="profile__avatar"
                src={userAvatar}
                alt="аватар пользователя"
              />
              <button
                className="profile__avatar-button"
                onClick={props.onEditAvatar}
              />
            </div>

            <div className="profile__info-block">
              <div className="profile__edit-block">
                <h1 className="profile__title">{userName}</h1>
                <button
                  type="button"
                  id="show-popup"
                  className="profile__edit-button"
                  aria-label="кнопка редактирования"
                  onClick={props.onEditProfile}
                />
              </div>
              <p className="profile__subtitle">{userDescription}</p>
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
            {cards.map((card) => (
              <Card
                card={card}                
                key={card._id}
                onCardClick={props.onCardClick}
              />
            ))}           
          </ul>
        </section>
      </div>
    </body>
  );
}

export default Main;

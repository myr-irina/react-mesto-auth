import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import AddPlacePopup from "./AddPlacePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "../components/ImagePopup";
import PopupWithDelete from "../components/PopupWithDelete";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import { Route, Switch, Redirect } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import InfoToolTip from "./InfoToolTip";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });
  const [isPopupWithDeleteOpen, setIsPopupWithDeleteOpen] =
    React.useState(false);
  const [cardIdWithDelete, setCardIdWithDelete] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isInfoToolTipPopupOpen, setIsInfoToolTipPopupOpen] = React.useState(false);
  const [registerSuccess, setRegisterSuccess] = React.useState(false);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userInfo, cardInfo]) => {
        setCurrentUser(userInfo);
        setCards(cardInfo);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((cards) =>
          cards.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    setIsPopupWithDeleteOpen(true);
    setCardIdWithDelete(card);
  }

  function handleUpdateUser(data) {
    api
      .setUserData(data)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(link) {
    api
      .updateAvatar(link)
      .then((link) => {
        setCurrentUser(link);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(card) {
    api
      .createCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteCardConfirm(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((item) => item !== card));
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleToolTipClick() {
    setIsInfoToolTipPopupOpen(true)
  }

  function isSuccess(data) {
    setRegisterSuccess(data);
  }

  
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: "", link: "" });
    setIsPopupWithDeleteOpen(false);
    setIsInfoToolTipPopupOpen(false);
  }

  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <div className="page__container">
          <Header />

          <Switch>
            <ProtectedRoute
              exact
              path="/"
              loggedIn={loggedIn}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              cards={cards}
              component={Main}
            />

            <Route path="/sign-in">
              <Login />
            </Route>
            <Route path="/sign-up">
              <Register />
            </Route>
            <Route>
              {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
            </Route>
          </Switch>

          <Footer />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddCard={handleAddPlaceSubmit}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <PopupWithDelete
            isOpen={isPopupWithDeleteOpen}
            onclose={closeAllPopups}
            onDeleteCardConfirm={handleDeleteCardConfirm}
            cardId={cardIdWithDelete}
          />
          <ImagePopup
            card={selectedCard !== null && selectedCard}
            onClose={closeAllPopups}
          />
          <InfoToolTip
           isOpen={isInfoToolTipPopupOpen}
           onClose={closeAllPopups}
           isSuccess={registerSuccess}
           />
        </div>
      </>
    </CurrentUserContext.Provider>
  );
}

export default App;

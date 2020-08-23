import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js'
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import { api } from '../utils/api.js';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();
  const [currentUser, setCurrentUser] = React.useState({ name: '', about: '' });
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInfo(), api.getInitialCards()])
      .then(([userProfile, cardsArray]) => {
        setCurrentUser(userProfile)
        setCards(cardsArray)
      })
  }, [])

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(obj) {
    api.editInfo(obj)
      .then((updatedUser) => setCurrentUser(updatedUser))
      .then(() => closeAllPopups())
  }

  function handleUpdateAvatar(obj) {
    api.changeAvatar(obj)
      .then((userProfile) => setCurrentUser(userProfile))
      .then(() => closeAllPopups())
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (!isLiked) {
      api.likeCard(card._id)
        .then(newCard => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c)
          setCards(newCards)
        })
    }
    else {
      api.dislikeCard(card._id)
        .then(newCard => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c)
          setCards(newCards)
        })
    }
  }

  function handleCardDelete(card) {
    api.removeCard(card._id);
    // TODO: filter and change state
  }

  function closeAllPopups() {
    if (document.querySelector('.popup_opened')) {
      document.querySelector('.popup_opened').classList.remove('popup_opened');
      setEditAvatarPopupOpen(false);
      setEditProfilePopupOpen(false);
      setAddPlacePopupOpen(false);
      setSelectedCard(null);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="project">
        <div className="page">
          <Header></Header>
          <Main
            onCardClick={handleCardClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          >
          </Main>
          <Footer></Footer>
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          >
          </EditProfilePopup>
          <PopupWithForm
            title='Новое место'
            name='element'
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <input
              className="popup__input popup__input_type_title"
              type="text"
              placeholder="Название"
              name="title"
              required
              id="title-input"
              minLength="2"
              maxLength="30"
            />
            <span
              id="title-input-error"
              className="popup__error"
            >Текст ошибки</span
            >
            <input
              className="popup__input popup__input_type_url"
              type="url"
              placeholder="Ссылка на картинку"
              id="url-input"
              name="url"
              required
            />
            <span
              id="url-input-error"
              className="popup__error"
            >Текст ошибки</span
            >
            <button
              type="submit"
              className="popup__submit-button popup-element__submit_button"
            >Сохранить</button
            >
          </PopupWithForm>

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <PopupWithForm
            title='Вы уверены?'
            name='confirm'
            onClose={closeAllPopups}
          >
            <button
              type="button"
              className="popup__submit-button popup-confirm__button"
            >Да</button>
          </PopupWithForm>

          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
          ></ImagePopup>

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
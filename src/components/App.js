import React, { useEffect, useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import InfoToolTip from './InfoTooltip.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js'
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup.js';
import ProtectedRoute from './ProtectedRoute.js';
import Login from './Login.js';
import Register from './Register.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import { api } from '../utils/api.js';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import * as auth from '../auth.js';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isInfoToolTipPopupOpen, setInfoToolTipPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();
  const [currentUser, setCurrentUser] = useState({ name: '', about: '' });
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ email: '', _id: '' });
  const [toolTipSuccess, setToolTipSuccess] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
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

  function handleCardDelete(cardToDelete) {
    api.removeCard(cardToDelete._id)
      .then(() => {
        setCards(cards.filter((card) => cardToDelete._id !== card._id))
      })
  }

  function handleAddPlace(obj) {
    api.sendElement(obj)
      .then((newCard) => setCards([...cards, newCard]))
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

  function closeAllPopups() {
    if (document.querySelector('.popup_opened')) {
      document.querySelector('.popup_opened').classList.remove('popup_opened');
      setEditAvatarPopupOpen(false);
      setEditProfilePopupOpen(false);
      setAddPlacePopupOpen(false);
      setSelectedCard(null);
    }
  }

  const history = useHistory();

  const onRegister = (email, password) => {
    return auth
      .register(email, password)
      .then((res) => {
        if (res.data) {
          setToolTipSuccess(true)
          setMessage('Вы успешно зарегистрировались! 🔥')
          setInfoToolTipPopupOpen(true)
        }
        else {
          setToolTipSuccess(false)
          setMessage(`${res.error} 😔`)
          setInfoToolTipPopupOpen(true)
        }
      })
      .catch((err) => console.log(err))
  };

  const tokenCheck = () => {
    let jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.getContent(jwt).then((data) => {
        if (data) {
          setLoggedIn(true)
          setUserData(data.data)
        }
        history.push('/');
      })
        .catch((err) => console.log(err))
    }
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  const onLogin = (email, password) => {
    return auth
      .authorize(email, password)
      .then((res) => {
        if (!res) {
          setToolTipSuccess(false);
          setMessage(`Неверный email или пароль. 😔`);
          setInfoToolTipPopupOpen(true);
        }
        else {
          tokenCheck();
        }
      }
      );
  }

  const onLogOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setUserData({ email: '', _id: '' });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="project">
        <div className="page">

          <Header
            email={userData.email}
            onLogOut={onLogOut}
          />

          <Switch>

            <Route exact path="/sign-in">
              <Login onLogin={onLogin} />
            </Route>

            <Route exact path="/sign-up">
              <Register onRegister={onRegister} loggedIn={loggedIn} />
            </Route>

            <Route>
              <ProtectedRoute
                onCardClick={handleCardClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
                component={Main}
                exact path={'/'}
                loggedIn={loggedIn}
              >
              </ProtectedRoute>
            </Route>

            <Route>
              {loggedIn ? <Redirect to='./' /> : <Redirect to='./sign-in' />}
            </Route>
            
          </Switch>

          <Footer />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          >
          </EditProfilePopup>

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlace}
          >
          </AddPlacePopup>

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
          >
          </ImagePopup>

          <InfoToolTip
            isOpen={isInfoToolTipPopupOpen}
            onClose={closeAllPopups}
            toolTipSuccess={toolTipSuccess}
            message={message}
          />

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
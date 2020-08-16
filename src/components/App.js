import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
    <body className="project">
      <div className="page">
        <Header></Header>
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}></Main>
        <Footer></Footer>
        <PopupWithForm title='Редактировать профиль' name='profile' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input className="popup__input popup__input_type_name" type="text" placeholder="Имя" name="name" required
            minLength="2" maxLength="40" id="name-input" />
          <span id="name-input-error" className="popup__error">Текст ошибки</span>
          <input className="popup__input popup__input_type_job" type="text" placeholder="Профессия" name="about" required
            minLength="2" maxLength="200" id="job-input" />
          <span id="job-input-error" className="popup__error">Текст ошибки</span>
          <button type="submit" className="popup__submit-button popup-profile__submit-button">Сохранить</button>
        </PopupWithForm>

        <PopupWithForm title='Новое место' name='element' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input className="popup__input popup__input_type_title" type="text" placeholder="Название" name="title" required
            id="title-input" minLength="2" maxLength="30" />
          <span id="title-input-error" className="popup__error">Текст ошибки</span>
          <input className="popup__input popup__input_type_url" type="url" placeholder="Ссылка на картинку" id="url-input"
            name="url" required />
          <span id="url-input-error" className="popup__error">Текст ошибки</span>
          <button type="submit" className="popup__submit-button popup-element__submit_button">Сохранить</button>
        </PopupWithForm>

        <PopupWithForm title='Обновить аватар' name='avatar' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input className="popup__input popup__input_type_avatar" type="url" placeholder="Ссылка на картинку" id="avatar-input"
            name="avatar" required />
          <span id="avatar-input-error" className="popup__error">Текст ошибки</span>
          <button type="submit" className="popup__submit-button popup-avatar__submit_button">Сохранить</button>
        </PopupWithForm>

        <PopupWithForm title='Вы уверены?' name='confirm' onClose={closeAllPopups}>
          <button type="button" className="popup__submit-button popup-confirm__button">Да</button>
        </PopupWithForm>

        <ImagePopup></ImagePopup>

      </div>
    </body>
  );
}

export default App;
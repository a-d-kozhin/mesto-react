import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const [name, setName] = React.useState('');
  const [job, setJob] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleJobChange(e) {
    setJob(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({name, about: job});
  }

  const currentUser = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    setName(currentUser.name);
    setJob(currentUser.about);
  }, [isOpen, currentUser.name, currentUser.about]);

  return (
    <PopupWithForm
      title='Редактировать профиль'
      name='profile'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleNameChange}
        value={name}
        className="popup__input popup__input_type_name"
        type="text" placeholder="Имя"
        name="name"
        required
        minLength="2"
        maxLength="40"
        id="name-input" />
      <span
        id="name-input-error"
        className="popup__error"
      >Текст ошибки</span>
      <input
        onChange={handleJobChange}
        value={job}
        className="popup__input popup__input_type_job"
        type="text"
        placeholder="Профессия"
        name="about"
        required
        minLength="2"
        maxLength="200"
        id="job-input" />
      <span
        id="job-input-error"
        className="popup__error"
      >Текст ошибки</span>
      <button
        type="submit"
        className="popup__submit-button popup-profile__submit-button"
      >Сохранить</button>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
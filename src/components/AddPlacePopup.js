import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

  const titleInput = React.useRef();
  const linkInput = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      title: titleInput.current.value,
      url: linkInput.current.value
    });
  }

  return (
    <PopupWithForm
      title='Новое место'
      name='element'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={titleInput}
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
        ref={linkInput}
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
  );
}

export default AddPlacePopup;
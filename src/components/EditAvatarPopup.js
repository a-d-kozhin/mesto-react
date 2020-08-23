import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  
  const avatarInput = React.useRef(); 


  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarInput.current.value
    });
  }

  return (
    <PopupWithForm
      title='Обновить аватар'
      name='avatar'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarInput}
        className="popup__input popup__input_type_avatar"
        type="url"
        placeholder="Ссылка на картинку"
        id="avatar-input"
        name="avatar"
        required
      />
      <span
        id="avatar-input-error"
        className="popup__error"
      >Текст ошибки</span>
      <button
        type="submit"
        className="popup__submit-button popup-avatar__submit_button"
      >Сохранить</button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
import React from 'react';

function PopupWithForm({name, title, children, isOpen, onClose}) {
  return (
    <>
      <section className={`popup popup-${name} ${isOpen ? 'popup_opened' : ''} `}>
        <div className="popup__overlay popup-profile__overlay" onClick={onClose}></div>
        <form className={`popup__container popup__form popup__form_type_${name}`} name="edit-profile" action="#" method="post"
          noValidate>
          <h3 className="popup__title">{title}</h3>
          {children}
          <button type="button" className="button popup__close-button popup-profile__close-button" onClick={onClose}></button>
        </form>
      </section>
    </>
  );
}

export default PopupWithForm;
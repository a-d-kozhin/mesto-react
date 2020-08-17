import React from 'react';

function ImagePopup({ card, onClose }) {
  let name = '';
  let link = '';
  if (card) {
    name = card.name;
    link = card.link;
  }
  return (
    <section className={`popup popup-image ${(card) ? 'popup_opened' : ''} `}>
      <div className="popup__overlay popup-image__overlay" onClick={onClose}></div>
      <div className="popup-image__wrapper">
        <div style={{ backgroundImage: `url(${link})` }} alt={name} className="popup-image__image"></div>
        <p className="popup-image__caption">{name}</p>
        <button type="button" className="button popup__close-button popup-image__close-button" onClick={onClose} />
      </div>
    </section>
  );
}

export default ImagePopup;
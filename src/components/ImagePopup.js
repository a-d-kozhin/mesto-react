import React from 'react';

function ImagePopup() {
  return (
    <section className="popup popup-image">
      <div className="popup__overlay popup-image__overlay"></div>
      <div className="popup-image__wrapper">
        <img alt="" className="popup-image__image" />
        <p className="popup-image__caption"></p>
        <button type="button" className="button popup__close-button popup-image__close-button"></button>
      </div>
    </section>
  );
}

export default ImagePopup;
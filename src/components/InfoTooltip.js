import React from 'react';
import successPic from '../images/success.svg';
import failPic from '../images/fail.svg';

function InfoToolTip({ toolTipSuccess, isOpen, onClose, message }) {
  return (
    <>
      <section className={`popup popup-info ${isOpen ? 'popup_opened' : ''} `}>
        <div className="popup__overlay popup-profile__overlay" onClick={onClose}></div>
        <div className="popup__container popup-info__container">
          {toolTipSuccess ? <img src={successPic} alt=""/> : <img src={failPic} alt=""/>}
          <h3 className="popup__title popup-info__title">{message}</h3>
          <button type="button" className="button popup__close-button popup-info__close-button" onClick={onClose} />
        </div>
      </section>
    </>
  );
}

export default InfoToolTip;
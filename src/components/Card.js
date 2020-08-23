import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (
    `button element__remove-button ${isOwn ?
      'element__remove-button_visible' :
      'element__remove-button_hidden'}`
  );

  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (
    `button ${isLiked ?
      'element__like-button element__like-button_active' :
      'element__like-button'}`
  );

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <li className="element">
        <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}/>
        <div style={{ backgroundImage: `url(${card.link})` }} className="element__image" alt={card.name} onClick={handleClick}></div>
        <div className="element__wrapper_horizontal">
          <h2 className="element__title">{`${card.name}`}</h2>
          <div className="element__wrapper_vertical">
            <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}/>
            <p className="element__likes-count">{`${card.likes.length}`}</p>
          </div>
        </div>
      </li>
    </CurrentUserContext.Provider>
  );
}

export default Card;
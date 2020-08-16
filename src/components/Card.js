import React from 'react';

function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="element" key={card._id}>
      <button type="button" className="button element__remove-button"></button>
      <div style={{ backgroundImage: `url(${card.link})` }} className="element__image" alt={card.name} onClick={handleClick}></div>
      <div className="element__wrapper_horizontal">
        <h2 className="element__title">{`${card.name}`}</h2>
        <div className="element__wrapper_vertical">
          <button type="button" className="button element__like-button"></button>
          <p className="element__likes-count">{`${card.likes.length}`}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
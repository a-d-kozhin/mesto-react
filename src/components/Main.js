import React from 'react';
import editAvatar from '../images/edit-avatar.svg';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onAddPlace, onCardClick, onEditProfile, cards, onCardLike, onCardDelete }) {

  const user = React.useContext(CurrentUserContext);

  return (
    <main className="content">

      <section className="profile">

        <div>
          <button type="button" className="profile__avatar-button" onClick={onEditAvatar}>
            <img className="profile__avatar-edit-icon" src={editAvatar} alt="" />
            <div style={{ backgroundImage: `url(${user.avatar})` }} alt="Аватар профиля" className="profile__avatar"></div>
          </button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{user.name}</h1>
          <button type="button" className="button profile__edit-button" onClick={onEditProfile} />
          <p className="profile__job">{user.about}</p>
        </div>
        <button type="button" className="button profile__add-button" onClick={onAddPlace} />
      </section>

      <ul className="elements">
        {cards.map((cardElement) => (
          <Card
          card={cardElement}
          onCardClick={onCardClick}
          key={cardElement._id}
          onCardLike={onCardLike}
          onCardDelete={onCardDelete}></Card>
        ))}
      </ul>

    </main>
  )
}
export default Main;
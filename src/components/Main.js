import React from 'react';
import { api } from '../utils/api.js';
import editAvatar from '../images/edit-avatar.svg';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInfo(), api.getInitialCards()])
      .then(([profile, cardsArray]) => {
        setUserName(profile.name)
        setUserDescription(profile.about)
        setUserAvatar(profile.avatar)
        setCards(cardsArray)
      })
  })
  return (
    <main className="content">

      <section className="profile">

        <div>
          <button type="button" className="profile__avatar-button" onClick={props.onEditAvatar}>
            <img className="profile__avatar-edit-icon" src={editAvatar}/>
            <div style={{ backgroundImage: `url(${userAvatar})` }} alt="Аватар профиля" className="profile__avatar"></div>
          </button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="button profile__edit-button" onClick={props.onEditProfile}></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button type="button" className="button profile__add-button" onClick={props.onAddPlace}></button>
      </section>

      <ul className="elements">
        {cards.map((cardElement) => (
          <Card card={cardElement} onCardClick={props.onCardClick}></Card>
        ))}
      </ul>

    </main>
  )
}
export default Main;
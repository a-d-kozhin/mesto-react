import React from 'react';
import { api } from '../utils/api.js';

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  api.getInfo()
    .then(profile => {
      setUserName(profile.name)
      setUserDescription(profile.about)
      setUserAvatar(profile.avatar)
    })

  return (
    <main className="content">

      <section className="profile">

        <div>
          <button type="button" className="profile__avatar-button" onClick={props.onEditAvatar}>
            <img className="profile__avatar-edit-icon" />
            <img src={userAvatar} alt="Аватар профиля" className="profile__avatar" />
          </button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userDescription}</h1>
          <button type="button" className="button profile__edit-button" onClick={props.onEditProfile}></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button type="button" className="button profile__add-button" onClick={props.onAddPlace}></button>
      </section>


      <ul className="elements">
      </ul>

    </main>
  );
}

export default Main;
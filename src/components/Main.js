import React from 'react';

function Main() {
  return (
    <main className="content">

      <section className="profile">

        <div>
          <button type="button" className="profile__avatar-button">
            <img src='' className="profile__avatar-edit-icon" />
            <img alt="Аватар профиля" className="profile__avatar" />
          </button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name"></h1>
          <button type="button" className="button profile__edit-button"></button>
          <p className="profile__job"></p>
        </div>
        <button type="button" className="button profile__add-button"></button>
      </section>


      <ul className="elements">
      </ul>

    </main>
  );
}

export default Main;
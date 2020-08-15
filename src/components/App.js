import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <>
      <body className="project">
        <div className="page">
          <Header></Header>
          <Main></Main>
          <Footer></Footer>

          <section className="popup popup-profile">
            <div className="popup__overlay popup-profile__overlay"></div>
            <form className="popup__container popup__form popup__form_type_profile" name="edit-profile" action="#" method="post"
              novalidate>
              <h3 className="popup__title">Редактировать профиль</h3>
              <input className="popup__input popup__input_type_name" type="text" placeholder="Имя" name="name" required
                minlength="2" maxlength="40" id="name-input" />
              <span id="name-input-error" className="popup__error">Текст ошибки</span>
              <input className="popup__input popup__input_type_job" type="text" placeholder="Профессия" name="about" required
                minlength="2" maxlength="200" id="job-input" />
              <span id="job-input-error" className="popup__error">Текст ошибки</span>
              <button type="submit" className="popup__submit-button popup-profile__submit-button">Сохранить</button>
              <button type="button" className="button popup__close-button popup-profile__close-button"></button>
            </form>
          </section>

          <section className="popup popup-element">
            <div className="popup__overlay popup-element__overlay"></div>
            <form className="popup__container popup__form popup__form_type_element" name="new-element" action="#" method="post"
              novalidate>
              <h3 className="popup__title">Новое место</h3>
              <input className="popup__input popup__input_type_title" type="text" placeholder="Название" name="title" required
                id="title-input" minlength="2" maxlength="30" />
              <span id="title-input-error" className="popup__error">Текст ошибки</span>
              <input className="popup__input popup__input_type_url" type="url" placeholder="Ссылка на картинку" id="url-input"
                name="url" required />
              <span id="url-input-error" className="popup__error">Текст ошибки</span>
              <button type="submit" className="popup__submit-button popup-element__submit_button">Сохранить</button>
              <button type="button" className="button popup__close-button popup-element__close-button"></button>
            </form>
          </section>

          <section className="popup popup-avatar">
            <div className="popup__overlay popup-avatar__overlay"></div>
            <form className="popup__container popup__form popup__form_type_avatar" name="new-avatar" action="#" method="post"
              novalidate>
              <h3 className="popup__title">Обновить аватар</h3>
              <input className="popup__input popup__input_type_avatar" type="url" placeholder="Ссылка на картинку" id="avatar-input"
                name="avatar" required />
              <span id="avatar-input-error" className="popup__error">Текст ошибки</span>
              <button type="submit" className="popup__submit-button popup-avatar__submit_button">Сохранить</button>
              <button type="button" className="button popup__close-button popup-avatar__close-button"></button>
            </form>
          </section>

          <section className="popup popup-confirm">
            <div className="popup__overlay popup-confirm__overlay"></div>
            <div className="popup__container popup-confirm__container">
              <h3 className="popup__title">Вы уверены?</h3>
              <button type="button" className="popup__submit-button popup-confirm__button">Да</button>
              <button type="button" className="button popup__close-button popup-confirm__close-button"></button>
            </div>
          </section>

          <section className="popup popup-image">
            <div className="popup__overlay popup-image__overlay"></div>
            <div className="popup-image__wrapper">
              <img alt="" className="popup-image__image" />
              <p className="popup-image__caption"></p>
              <button type="button" className="button popup__close-button popup-image__close-button"></button>
            </div>
          </section>

        </div>
      </body>
    </>
  );
}

export default App;
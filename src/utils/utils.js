export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const profileAvatar = document.querySelector('.profile__avatar');
export const profileAvatarButton = document.querySelector('.profile__avatar-button');
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');
export const editProfile = document.querySelector('.profile__edit-button');
export const addElement = document.querySelector('.profile__add-button');
export const elementSubmitButton = document.querySelector('.popup-element__submit_button');
export const profileSubmitButton = document.querySelector('.popup-profile__submit-button');
export const avatarSubmitButton = document.querySelector('.popup-avatar__submit_button');

export const obj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

export const config = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-13/',
  headers: {
    authorization: '9b4159b0-f593-4984-be9b-af6528533bd7',
    'Content-Type': 'application/json'
  }
}
import {isEscapeKey} from"./util.js";
const imgInput = document.querySelector(".img-upload__input");
const body = document.body;
const imgOverlay = document.querySelector(".img-upload__overlay");
const closeImg = document.querySelector(".img-upload__cancel");
const postForm = document.querySelector(".img-upload__form");
const formButton = document.querySelector(".img-upload__submit");
const pristine = new Pristine(postForm, {
  classTo: "img-upload__text",
  errorTextParent: "img-upload__text",
});
const regexp = /^#[^\s#]+$/i;

imgInput.addEventListener("change", (evt) => {
  evt.preventDefault();
  imgOverlay.classList.remove("hidden");
  body.classList.add("modal-open");
  pristine.validate();
  const isValid = pristine.validate();
  if (isValid) {
    console.log("Можно отправлять");
  } else {
    console.log("Форма невалидна");
  }
});

function validateHastags (value) {
  const hashtags = value.trim().split(" ");
  if (value.trim() === "") {
    return true;
  }
  return hashtags.every((hashtag) => regexp.test(hashtag));
}
function validateComment (value) {
  if (value.trim() === "") {
    return true;
  }
  return value.length <= 140;
}

function dublicateHashtags(value) {
  const hashtags = value.trim().split(" ");
  for (let i = 0; i < hashtags.length; i++){
    const hashtag = hashtags[i].toLowerCase();
    if (hashtags.slice(0, i).includes(hashtag)) {
      return false;
    }
  }
  return true;
}

const hastags = document.querySelector(".text__hashtags");
const postText = document.querySelector(".text__description");
pristine.addValidator(
  hastags,
  validateHastags,
  "введён невалидный хэш-тег"
);
pristine.addValidator(
  hastags,
  dublicateHashtags,
  "хэш-теги повторяются"
);
pristine.addValidator(
  postText,
  validateComment,
  "комментарий не может содрежать больше 140 символов"
);


function openSuccess (){
  const successTemplate = document.querySelector("#success").content;
  const successElement = successTemplate.cloneNode(true).querySelector(".success");
  const successButton = successElement.querySelector(".success__button");
  const successInner = successElement.querySelector(".success__inner");

  document.body.append(successElement);
  hastags.value = "";
  postText.value = "";

  successButton.addEventListener("click", closeSuccess);
  document.addEventListener("keydown", closeSuccessEscape);
  document.addEventListener("click", closeOutside);

  function closeSuccess(){
    successElement.remove();
    document.removeEventListener("keydown",closeSuccessEscape);
    document.removeEventListener("click",closeOutside);
    imgOverlay.classList.add("hidden");
    body.classList.remove("modal-open");
  }

  function closeSuccessEscape (evt){
    if(isEscapeKey(evt)) {
      evt.preventDefault();
      closeSuccess();
      closeForm();
    }

  }
  function closeOutside(evt){
    if (!successInner.contains(evt.target)){
      closeSuccess();
      imgOverlay.classList.add("hidden");
      body.classList.remove("modal-open");
    }
  }
}


function openError (){
  const errorTemplate = document.querySelector("#error").content;
  const errorElement = errorTemplate.cloneNode(true).querySelector(".error");
  const errorButton = errorElement.querySelector(".error__button");
  const errorInner = errorElement.querySelector(".error__inner");

  document.body.append(errorElement);

  errorButton.addEventListener("click", closeError);
  document.addEventListener("keydown", closeErrorEscape);
  document.addEventListener("click", closeOutside);

  function closeError(){
    errorElement.remove();
    document.removeEventListener("keydown",closeErrorEscape);
    document.removeEventListener("click",closeOutside);
  }

  function closeErrorEscape (evt){
    if(isEscapeKey(evt)) {
      evt.preventDefault();
      closeError();
      document.removeEventListener("click",closeForm);
    }

  }
  function closeOutside(evt){
    if (!errorInner.contains(evt.target)){
      closeError();
    }
  }
}


postForm.addEventListener("submit",(evt) => {
  evt.preventDefault();
  formButton.disabled = true;
  if(pristine.validate()){
    openSuccess();
    formButton.disabled = false;
  }else {
    openError();
    formButton.disabled = false;
  }

});
function closeForm(){
  closeImg.addEventListener("click", () => {
    imgOverlay.classList.add("hidden");
    body.classList.remove("modal-open");
  });
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      evt.preventDefault();
      imgOverlay.classList.add("hidden");
      body.classList.remove("modal-open");
    }
  });
}
closeForm();


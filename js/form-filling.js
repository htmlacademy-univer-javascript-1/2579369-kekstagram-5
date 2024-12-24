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
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
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
pristine.addValidator(
  document.querySelector(".text__hashtags"),
  validateHastags,
  "введён невалидный хэш-тег"
);
pristine.addValidator(
  document.querySelector(".text__hashtags"),
  dublicateHashtags,
  "хэш-теги повторяются"
);
pristine.addValidator(
  document.querySelector(".text__description"),
  validateComment,
  "комментарий не может содрежать больше 140 символов"
);
const successTemplate = document.querySelector("#success").content;
const successElement = successTemplate.cloneNode(true).querySelector(".success");
const successButton = successElement.querySelector(".success__button");
function openSucsess (){
  document.body.append(successElement);
  successButton.addEventListener("click", closeSuccess);
}
function closeSuccess(){
  successButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    successElement.remove();
  });
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      evt.preventDefault();
      successElement.remove();
    }
  });
  document.addEventListener("click", (evt) => {
    if (successElement && !successElement.contains(evt.target)) {
      successElement.remove();
    }
  });
}

const errorTemplate = document.querySelector("#error").content;
const errorElement = errorTemplate.cloneNode(true).querySelector(".error");
const errorButton = errorElement.querySelector(".error__button");
function openError (){
  document.body.append(errorElement);
  errorButton.addEventListener("click", closeError);
}
function closeError(){
  errorButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    errorElement.remove();
  });
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      evt.preventDefault();
      errorElement.remove();
    }
  });
}

postForm.addEventListener("submit",(evt) => {
  evt.preventDefault();
  formButton.disabled = true;
  if(pristine.validate()){
    openSucsess();
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


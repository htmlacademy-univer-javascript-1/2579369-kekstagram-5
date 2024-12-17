

const bigPicture = document.querySelector(".big-picture");
const buttonClosePhoto = bigPicture.querySelector(".big-picture__cancel");
const bigPictureImg = bigPicture.querySelector(".big-picture__img img");
const likesCount = bigPicture.querySelector(".likes-count");
const commentsCount = bigPicture.querySelector(".comments-count");
const socialCaption = bigPicture.querySelector(".social__caption");
const body = document.querySelector("body");

function closePosts(){
  buttonClosePhoto.addEventListener("click", () => {
    bigPicture.classList.add("hidden");
    body.classList.remove("modal-open");
  });
}
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    bigPicture.classList.add("hidden");
    body.classList.remove("modal-open");
  }
});

function defineBigPicture(post){
  const{url,likes,comments,description} = post;
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = description;
  const socialComments = bigPicture.querySelector(".social__comments");
  // post.comments.forEach((socialComments[index])=>{
  //   const avatar = socialComment.querySelector('.social__picture');
  //   const text = socialComment.querySelector('.social__text');
  //   avatar.src = comments.avatar;
  //   avatar.alt = comments.name;
  //   text.txtContent = comments.message;
  // });
}
closePosts();

export{defineBigPicture, bigPicture,body};

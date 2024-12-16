

const bigPicture = document.querySelector(".big-picture");
const buttonClosePhoto = bigPicture.querySelector(".big-picture__cancel");
const bigPictureImg = bigPicture.querySelector(".big-picture__img img");
const likesCount = bigPicture.querySelector(".likes-count");
const commentsCount = bigPicture.querySelector(".comments-count");
const socialComments = bigPicture.querySelector(".social__comments");
//const socialPicture = socialComments.querySelector('.social__picture img');
//const socialText = socialComments.querySelector('.social__text');
const socialCaption = bigPicture.querySelector(".social__caption");
const socialCommentCount = bigPicture.querySelector(".social__comment-count");
const commentsLoader = bigPicture.querySelector(".comments-loader");

function closePosts(){
  buttonClosePhoto.addEventListener("click", () => {
    bigPicture.classList.add("hidden");
  });
}
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    bigPicture.classList.add("hidden");
  }
});

function defineBigPicture(post){
  const{url,likes,comments,description} = post;
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = description;
  //socialComments;
}
closePosts();

export{defineBigPicture};

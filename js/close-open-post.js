

const bigPicture = document.querySelector(".big-picture");
const buttonClosePhoto = bigPicture.querySelector(".big-picture__cancel");
const bigPictureImg = bigPicture.querySelector(".big-picture__img img");
const likesCount = bigPicture.querySelector(".likes-count");
const commentsCount = bigPicture.querySelector(".comments-count");
const socialCaption = bigPicture.querySelector(".social__caption");
const body = document.querySelector("body");
const socialComments = bigPicture.querySelector(".social__comments");
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
  socialComments.textContent = "";
  comments.forEach((comment)=>{
    const commentItem = document.createElement("li");
    commentItem.classList.add("social__comment");
    const commentImg = document.createElement("img");
    commentImg.classList.add("social__picture");
    const commentText = document.createElement("p");
    commentText.classList.add("social__text");
    commentImg.src = comment.avatar;
    commentImg.alt = comment.name;
    commentText.textContent = comment.message;
    commentItem.appendChild(commentImg);
    commentItem.appendChild(commentText);
    socialComments.appendChild(commentItem);
  });
}
closePosts();

export{defineBigPicture, bigPicture,body};

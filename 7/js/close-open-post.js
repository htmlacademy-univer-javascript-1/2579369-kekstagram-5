const bigPicture = document.querySelector(".big-picture");
const buttonClosePhoto = bigPicture.querySelector(".big-picture__cancel");
const bigPictureImg = bigPicture.querySelector(".big-picture__img img");
const likesCount = bigPicture.querySelector(".likes-count");
const commentsCount = bigPicture.querySelector(".comments-count");
const socialCaption = bigPicture.querySelector(".social__caption");
const body = document.querySelector("body");
const socialComments = bigPicture.querySelector(".social__comments");
const socialCommentCount = bigPicture.querySelector(".social__comment-count");
const commentsLoader = bigPicture.querySelector(".comments-loader");

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
  let visibleComments = 0;
  comments.forEach((comment,index)=>{
    const commentItem = document.createElement("li");
    commentItem.classList.add("social__comment");
    const commentImg = document.createElement("img");
    commentImg.classList.add("social__picture");
    const commentText = document.createElement("p");
    commentText.classList.add("social__text");
    commentImg.src = comment.avatar;
    commentImg.alt = comment.name;
    if (index > 4){
      commentItem.classList.add("hidden");
    }else{
      visibleComments ++;
    }
    commentText.textContent = comment.message;
    commentItem.appendChild(commentImg);
    commentItem.appendChild(commentText);
    socialComments.appendChild(commentItem);
  });
  socialCommentCount.textContent = `${visibleComments} из ${ commentsCount.textContent } комментариев`;
  showCommentLoader();
  commentsLoader.onclick = () => {
    const hiddenComments = socialComments.querySelectorAll(".social__comment.hidden");
    for(let i = 0; i < Math.min(5, hiddenComments.length); i++){
      hiddenComments[i].classList.remove("hidden");
      visibleComments++;
    }
    showCommentLoader();
    socialCommentCount.textContent = `${visibleComments} из ${ commentsCount.textContent } комментариев`;
  };

}

function showCommentLoader (){
  if (document.querySelectorAll(".social__comment.hidden").length === 0){
    commentsLoader.classList.add("hidden");
  }else{
    commentsLoader.classList.remove("hidden");
  }
}
closePosts();

export{defineBigPicture, bigPicture,body};

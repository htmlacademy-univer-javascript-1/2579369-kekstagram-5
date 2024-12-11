import {posts} from"./posts-rendering.js";

const bigPictures = document.querySelector(".big-picture");
const buttonClodePhoto = bigPictures.querySelector(".big-picture__cancel");

function closePosts(){
  buttonClodePhoto.addEventListener("click", () => {
    bigPictures.classList.add("hidden");
  });
}
const sectionpictures = document.querySelectorAll(".picture");
function createBigPhotot(){
  sectionpictures.forEach((sectionpicture)=>{
    const bigPictureImg = bigPictures.querySelector(".big-picture__img");
    bigPictureImg.img.url = ;
  // const photolikes = .querySelector(".picture__likes");
  });
  // photolikes.textContent = likes;
}
closePosts();
//createBigPhotot();

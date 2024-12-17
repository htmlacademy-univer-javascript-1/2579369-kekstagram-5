import {createPost} from "./data.js";
import {POST_COUNT} from "./constants.js";
import {defineBigPicture, bigPicture, body} from "./close-open-post.js";

const posts = Array.from({length:POST_COUNT},createPost);

function renderPosts () {

  const pictureTemplate = document.querySelector("#picture").content;
  const picturesContainer = document.querySelector(".pictures");
  const fragment = document.createDocumentFragment();

  posts.forEach((post)=>{
    const {url,description,likes,comments} = post;
    const socialCommentCount = bigPicture.querySelector(".social__comment-count");
    const commentsLoader = bigPicture.querySelector(".comments-loader");
    const postsElementDiv = document.createElement("div");
    const postsElement = pictureTemplate.cloneNode(true);
    const pictureImg = postsElement.querySelector(".picture__img");
    pictureImg.src = url;
    pictureImg.alt = description;
    const photolikes = postsElement.querySelector(".picture__likes");
    photolikes.textContent = likes;
    const pictureComments = postsElement.querySelector(".picture__comments");
    pictureComments.textContent = comments.length;
    postsElementDiv.appendChild(postsElement);
    fragment.appendChild(postsElementDiv);
    postsElementDiv.addEventListener("click", () => {
      bigPicture.classList.remove("hidden");
      socialCommentCount.classList.add("hidden");
      commentsLoader.classList.add("hidden");
      body.classList.add("modal-open");
      defineBigPicture(post);
    });
  });
  picturesContainer.appendChild(fragment);
}
export {renderPosts,posts};


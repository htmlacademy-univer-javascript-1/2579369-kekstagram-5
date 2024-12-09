import {createPost} from "./data.js";
import {POST_COUNT} from "./constants.js";

const posts = Array.from({length:POST_COUNT},createPost);

const pictureTemplate = document.querySelector("#picture").content;
const picturesContainer = document.querySelector(".pictures");
function renderPosts () {

  const fragment = document.createDocumentFragment();

  posts.forEach((post)=>{
    const [url,description,likes,comments] = post;
    const postsElement = pictureTemplate.cloneNode(true);
    const pictureImg = postsElement.querySelector(".picture__img");
    pictureImg.src = url;
    pictureImg.alt = description;
    const photolikes = postsElement.querySelector(".picture__likes");
    photolikes.textContent = likes;
    const pictureComments = postsElement.querySelector(".picture__comments");
    pictureComments.textContent = comments.length;
    fragment.appendChild(postsElement);
  });
  picturesContainer.appendChild(fragment);
}
export {renderPosts};


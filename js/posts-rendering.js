import {defineBigPicture, bigPicture, body} from "./close-open-post.js";

function renderPosts (posts) {

  const pictureTemplate = document.querySelector("#picture").content;
  const picturesContainer = document.querySelector(".pictures");
  const fragment = document.createDocumentFragment();

  posts.forEach((post)=>{
    const {url,description,likes,comments} = post;
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
      body.classList.add("modal-open");
      defineBigPicture(post);
    });
  });
  picturesContainer.appendChild(fragment);
}
export {renderPosts};


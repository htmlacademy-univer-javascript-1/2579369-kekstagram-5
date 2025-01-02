import {renderPosts} from"./posts-rendering.js";
import {showAlert} from "./data-error.js";
import "./form-filling.js";
import {loadPhoto} from "./photo-load.js";
import {getPostsFromServer} from "./interact-with-data.js";
loadPhoto();
getPostsFromServer();

//const sendData = postData(console.log, console.error);
//sendData();

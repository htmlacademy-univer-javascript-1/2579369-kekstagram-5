import {renderPosts} from"./posts-rendering.js";
import {showAlert} from "./data-error.js";
import "./form-filling.js";
import {loadPhoto} from "./photo-load.js";
import {getData} from "./interact-with-data.js";
loadPhoto();
getData(renderPosts, showAlert)();

//const sendData = postData(console.log, console.error);
//sendData();

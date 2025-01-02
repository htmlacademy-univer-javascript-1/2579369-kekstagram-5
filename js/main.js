import {sendDataFromForm} from "./form-filling.js";
import {loadPhoto} from "./photo-load.js";
import {getPostsFromServer} from "./interact-with-data.js";
loadPhoto();
getPostsFromServer();
sendDataFromForm();

import {renderPosts} from"./posts-rendering.js";
import {showAlert} from "./data-error.js";
const getData = (onSuccess, onError) => () =>
  fetch(
    "https://29.javascript.htmlacademy.pro/kekstagram/data",
    {
      method: "GET",
      credentials: "same-origin",
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }else{
        onError("Не удалось загрузить данные. Попробуйте ещё раз");
      }

    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onError("Не удалось загрузить данные. Попробуйте ещё раз");
    });

const sendData = (onError,body,onSuccess) => () =>
  fetch (
    "https://29.javascript.htmlacademy.pro/kekstagram",
    {
      method: "POST",
      body,
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Не удалось отправить форму. Попробуйте ещё раз");
      }
      return onSuccess();
    })
    .catch(onError);

const getPostsFromServer = getData(renderPosts, showAlert);
export{getPostsFromServer,sendData};

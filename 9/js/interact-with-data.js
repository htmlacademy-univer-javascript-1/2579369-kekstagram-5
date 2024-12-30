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
      onSuccess();
    })
    .catch(() => {
      onError("Не удалось отправить форму. Попробуйте ещё раз");
    });
export{getData,sendData};
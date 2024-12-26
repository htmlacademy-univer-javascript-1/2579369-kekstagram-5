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

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onError("Не удалось загрузить данные. Попробуйте ещё раз");
    });

const sendData = (onError,formData) => () =>
  fetch (
    "https://29.javascript.htmlacademy.pro/kekstagram",
    {
      method: "POST",
      credentials: "same-origin",
      body: formData,
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
    })
    .catch(() => {
      onError("Не удалось отправить данные. Попробуйте ещё раз");
    });
export{getData,sendData};

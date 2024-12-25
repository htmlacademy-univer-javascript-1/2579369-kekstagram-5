import {FILE_TYPES} from "./constants.js";
function loadPhoto(){
  const imgInput = document.querySelector(".img-upload__input");
  const preview = document.querySelector(".img-upload__preview img");

  imgInput.addEventListener("change", () => {
    const file = imgInput.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if(matches){
      preview.src = URL.createObjectURL(file);
    }
  });
}

export{loadPhoto};

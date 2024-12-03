import {getRandomInteger} from './util.js';
import {POST_COUNT,NAMES,MESSAGES,DESCRIPTIONS} from'./constants.js';

const createComment = () => {
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
  return {
    id:getRandomInteger(0,30),
    avatar:`img/avatar-${ getRandomInteger(1,6) }.svg`,
    message: Array.from({length:getRandomInteger(1,2)}, () => MESSAGES[getRandomInteger(0, MESSAGES.length - 1)]).join("\n"),
    name: NAMES[randomNameIndex]
  };
};

const createComments = () => {
  const comments = [];
  for (let i = 0;i < getRandomInteger(0,31);i++){
    comments.push(createComment());
  }
  return comments;
};
const createPost = (elemt,index) =>({
  id:index,
  url:`photos/${ index }.jpg`,
  description:DESCRIPTIONS[getRandomInteger(0,DESCRIPTIONS.length - 1)],
  likes:getRandomInteger(15,200),
  comments:createComments()
});


const posts = Array.from({length:POST_COUNT},createPost);
console.log(posts);
export{posts};

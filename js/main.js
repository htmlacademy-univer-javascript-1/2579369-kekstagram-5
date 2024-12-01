const POST_COUNT = 25;
const NAMES = [
  "Наташа",
  "Алексей",
  "Лиза",
  "Мирослава",
  "Дмитрий",
  "Данила",
  "Софа",
  "Марьяна"
];

const MESSAGES = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];

const DESCRIPTIONS = [
  "на чилле, на раслабоне!",
  "Анапа 2024",
  "Дача, шашлыки, что еще нужно для счастья?",
  "Not pickme",
  "В качалке с друзьями",
  "Гламур"
];

//функции для рандомных чисел
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const createComment = () => {
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
  return {
    id:getRandomInteger(0,30),
    avatar:`img/avatar-${ getRandomInteger(1,6) }.svg`,
    message: Array.from({length:getRandomInteger(1,2)}, () => MESSAGES[getRandomInteger(0, MESSAGES.length - 1)]),
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

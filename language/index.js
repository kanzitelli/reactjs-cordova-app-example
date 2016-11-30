export default function translate(string) {
  if (localStorage.getItem('language') === 'en') {
    if (string === 'EnglishL') return 'English';
    return string;
  } else {
    if (translations[string.toLowerCase()]) {
      return translations[string.toLowerCase()];
    } else {
      return string;
    }
  }
}

const translations = {
  'hello': 'Привет',
  'this is professor oli': 'Это Профессор Оли',
  'he will help you to learn interesing things': 'Он поможет тебе узнать много интересных вещей',
  'please, choose your language': 'Пожалуйста, выбери язык',
  'englishl': 'Английский',
  'russian': 'Русский',
  'what do you prefer': 'Что ты предпочитаешь',
  'what do you want to learn': 'Что ты хочешь изучить',
  'last step': 'Последний шаг',
  'you just need to press on side you like': 'Тебе нужно нажать на сторону, которая больше нравится',

  'welcome': 'ДОБРО ПОЖАЛОВАТЬ',
  'question 1': 'ВОПРОС #1',
  'question 2': 'ВОПРОС #2',
  'question 3': 'ВОПРОС #3',

  'continue': 'Продолжить',
  'change subject': 'Поменять предмет',
  'back': 'Назад',

  'video': 'Видео',
  'text': 'Текст',
  'extra': 'Дополнительно',

  'current choice': 'Текущий выбор',

  'science': 'НАУКА',
  'cells': 'КЛЕТКИ',
  'mars': 'МАРС',

  'math': 'МАТЕМАТИКА',
  'angles': 'УГЛЫ',
  'comparing prices': 'СРАВНИВАНИЕ ЦЕН',
  'interest': 'ИНТЕРЕС',

  'engineering & tech': 'ИНЖЕНИРИНГ И ТЕХНОЛОГИИ',
  'cameras': 'КАМЕРЫ',
  'international space station': 'КОСМИЧЕСКАЯ СТАНЦИЯ',
  'digital etiquette': 'ЭЛЕКТРОННЫЙ ЭТИКЕТ',

  'social studies': 'СОЦИАЛЬНЫЕ ИССЛЕДОВАНИЯ',
  'civil war': 'ГРАЖДАНСКАЯ ВОЙНА',
  'stocks and shares': 'АКЦИИ И ДОЛИ',
  'martin luther king, jr.': 'МАРТИН ЛЮТЕР КИНГ МЛАДШИЙ',

  'english': 'АНГЛИЙСКИЙ',
  'main idea': 'ОСНОВАЯ ИДЕЯ',
  'william shakespeare': 'Виллиам Шекспир',
  'blogs': 'БЛОГИ',

  'arts & music': 'ИСКУССТВО & МУЗЫКА',
  'leonardo da vinci': 'ЛЕОНАРДО ДА ВИНЧИ',
  'digital animation': 'АНИМАЦИЯ',

  'health': 'ЗДОРОВЬЕ',
  'asthma': 'АСТМА',
  'dna': 'ДНК',
  'nutrition': 'ПИТАНИЕ'
};

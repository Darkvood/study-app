export const description = `
    <p>Чешские местоимения идентичны русским, разница заключается лишь в том, что записывают их латиницей.</p>
    <p>Например: <i>ty</i> - ты; <i>on</i> - он.</p>
    <p>Сложность вызывают слова, род которых не соответствует русским значениям, например <i>zahrada</i> (ж.р) - сад (м.р).</p>
    <p>Местоимения делятся на личные, притяжательные и вопросительные.</p>
    <h3>Личные местоимения</h3>
    <p>
      В разговорной речи личные местоимения практически не употребляются, исключение составляют только случаи,
      в которых нужно указать на определённое лицо.
    </p>
    <p>Единственное число:</p>
    <ul>
      <li><i>já</i> - я</li>
      <li><i>ty</i> - ты</li>
      <li><i>on</i>, <i>ona</i>, <i>ono</i> - он, она, оно</li>
    </ul>
    <p>Множественное число:</p>
    <ul>
      <li><i>my</i> - мы</li>
      <li><i>vy</i> - вы</li>
      <li><i>oni</i>, <i>ony</i>, <i>ona</i> - мы</li>
    </ul>
    <h3>Притяжательные местоимения</h3>
    <ul>
      <li><i>můj</i> - мой</li>
      <li><i>tvůj</i> - твой</li>
      <li><i>jeho</i> - его</li>
      <li><i>její</i> - ее</li>
      <li><i>jeho</i> - его</li>
      <li><i>naši</i> - наши</li>
      <li><i>vaši</i> - ваши</li>
      <li><i>jejich</i> - их</li>
    </ul>
    <h3>Вопросительные местоимения</h3>
    <ul>
      <li><i>Kdo?</i> - Кто?</li>
      <li><i>Co?</i> - Что?</li>
    </ul>
    <h3>Итого</h3>
    <p>В данном уроке мы познакомились с местоимениями, в дальнейшем вы узнаете как склонять и употреблять их.</p>
  `;

export const questions = [
  {
    question: 'Ознакомтесь с теоретическим материалом и напишите "готов"',
    answer: 'готов',
    onError: 'Напишите "готов", если вы ознакомились с теоретическим материалом',
    onDone: 'Вопросы будут связаны с переводом, при ответах рекомендуем обращаться к теории только при необходимости'
  },
  {
    question: 'Выполните перевод: ty',
    answer: 'ты'
  },
  {
    question: 'Выполните перевод: мы',
    answer: 'my'
  },
  {
    question: 'Выполните перевод: твой<br /> P.S. Возможно вам понадобится ů (при необходимости скопируйте)',
    answer: 'tvůj'
  },
  {
    question: 'Выполните перевод: ваши<br /> P.S. Возможно вам понадобится š (при необходимости скопируйте)',
    answer: 'vaši'
  },
  {
    question: 'Выполните перевод: naši',
    answer: 'наши'
  },
  {
    question: 'Выполните перевод: její',
    answer: ['ее', 'её']
  },
  {
    question: 'Выполните перевод: Кто?',
    answer: ['kdo?', 'kdo']
  },
  {
    question: 'Выполните перевод: Co?',
    answer: ['что?', 'что']
  }
];
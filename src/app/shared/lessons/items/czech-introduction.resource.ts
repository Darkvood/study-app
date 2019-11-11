export default {
  description: `
     <p>
       Чешский и русский языки являются родственными, оба являются славянскими языками, однако чешский язык относится к западнославянской
       группе, в то время как русский — к восточнославянской. Языки схожи, но имеют принципиальные отличия.
     </p>
     <h3>Отличия от русского языка</h3>
     <ul>
       <li>использует <b>латинский</b> алфавит с диакритическими знакaми;</li>
       <li>глагол-связка «быть» обязателен;</li>
       <li>ударение фиксировано на первом слоге и выделяется гораздо слабее;</li>
       <li>отрицательные формы глаголов путем прибавления частицы «НЕ», которая пишется слитно;</li>
       <li>так же имеется ряд отличий, с которыми вы ознакомитесь позже.</li>
     </ul>
     <h3>Диакритические знаки</h3>
     <p>В чешском языке используются <b>три</b> типа диакритических знаков:</p>
     <ul>
       <li><b>čárka</b> — штрих (´), указывает <b>на длину</b>, такие звуки тянутся вдвое дольше. Применение: á, é, í, ó, ú, ý </li>
       <li><b>kroužek</b> — кружок (°), так же как и чарка, указывает длину гласного, однако используется только с буквой ů.
       Используется в середине или конце слова</li>
       <li><b>háček</b> — крючок (ˇ), смягчает звук. Применение: ě, č, š, ž ď, ť, ň, ř</li>
     </ul>
     <h3>Глагол-связка «Быть» (být)</h3>
     <p>В чешском языке нельзя сказать "Я дома" или "Я умный". Вы обязаны употреблять глагол-связку <b>být</b>.</p>
     <p>Например: "Я <i>есть</i> дома" (Já <b>jsem</b> doma) или "Я <i>есть</i> умный" (Já <b>jsem</b> chytrý).</p>
     <p>В данном уроке мы специально не будем рассматривать спряжение глагола быть (<i>být</i>). На текущем этапе важно понять,
     что его употребление обязательно!</p>
   `,
  questions: [
    {
      question: 'Ознакомтесь с теоретическим материалом и напишите "готов"',
      answer: 'готов',
      onError: 'Напишите "готов", если вы ознакомились с теоретическим материалом'
    },
    {
      question: 'Какой алфавит используется в чешском языке?',
      answer: 'латинский'
    },
    {
      question: 'Сколько типов диакритических знаков используется?',
      answer: ['три', '3']
    },
    {
      question: 'На что указывает диакритические знак čárka?',
      answer: 'длину'
    },
    {
      question: 'Можно ли опустить глагол-связку "быть" в предложении?',
      answer: ['нельзя', 'нет']
    }
  ]
};

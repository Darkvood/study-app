import {BaseLesson, ILesson, ILessonQuestion} from '../base/base-lesson';

export class СzechByt extends BaseLesson implements ILesson {
  uid = 'czech-byt';
  title = 'Чешский язык. Глагол «Быть» (být)';
  img = 'flag_czech';
  shortDescription = 'Употребление глагола-связки «Быть»';
  categories = ['Чешский язык'];
  description = `
    <p>
      Предложение в чешском языке не может быть без глагола. Глагол — это изменяемая часть речи,
      а значит, спрягается. Но для начала нужно выучить новые слова.
    </p>
    <h3>Словарь</h3>
    <ul>
      <li><b>Čech</b> — чех</li>
      <li><b>Rus</b> — русский</li>
      <li><b>děti</b> — дети</li>
      <li><b>venku</b> — на улице (вне помещения)</li>
      <li><b>dům</b> — дом (<b>doma</b> — в доме, дома) </li>
      <li><b>škola</b> — школа</li>
      <li><b>student</b> — студент</li>
      <li><b>práce</b> — работа</li>
      <li><b>doktor</b> — доктор, врач</li>
      <li><b>rodiče</b> — родители</li>
      <li><b>proč</b> — родители</li>
    </ul>
    <p>
      <b>Обратите внимание!</b> Национальности пишутся с заглавной буквы. Так же, как и в русском, существительные в чешском языке
      склоняются по родам, например, <b>student</b> - студент, <b>studentka</b> - студентка. Стоит учесть, что некоторые слова,
      которые не склоняются по родам в русском языке, могут склоняться в чешском, например, <b>doktor</b> <i>(м.р.)</i>,
      <b>doktorka</b> <i>(ж.р.)</i>.
    </p>
    <h3>Спряжение глагола «být»</h3>
    <ul>
      <li>Já <b>jsem</b> doma — я дома.</li>
      <li>Ty <b>jsi</b> doma — ты дома.</li>
      <li>On, ona, ono <b>je</b> doma — он, она, оно дома.</li>
      <li>My <b>jsme</b> doma — мы дома.</li>
      <li>Vy <b>jste</b> doma — вы дома.</li>
      <li>Oni <b>jsou</b> doma — они дома.</li>
    </ul>
    <h3>Отрицательная форма</h3>
    <p>Отрицательная форма глагола образуется добавлением приставки <b>ne</b>. Исключением является третья форма единственного числа.</p>
    <ul>
      <li>Já <b>nejsem</b> doma — я не дома.</li>
      <li>Ty <b>nejsi</b> doma — ты не дома.</li>
      <li>On, ona, ono <b>není</b> doma — он, она, оно не дома. <i>Исключение!</i></li>
      <li>My <b>nejsme</b> doma — мы не дома.</li>
      <li>Vy <b>nejste</b> doma — вы не дома.</li>
      <li>Oni <b>nejsou</b> doma — они не дома.</li>
    </ul>
    <h3>Вопросительная форма</h3>
    <p>
      Вопрос выделяется интонацией, а в конце предложения ставится вопросительный знак, так же как и в русском языке.
      Если в тексте присутствует вопросительное местоимение, то оно ставится на первое место.
    </p>
    <ul>
      <li>Ty <b>jsi</b> v práci? - Ты на работе?</li>
      <li>On <b>je</b> ve škole? - Он в школе? </li>
      <li>Vy <b>jste</b> doktor? - Вы доктор?</li>
      <li>Proč <b>nejsi</b> doma? – Почему ты не дома?</li>
      <li>Proč <b>není</b> ve škole? - Почему он не в школе?</li>
    </ul>
    <h3>Согласование</h3>
    <p>
      В русском языке мы ежедневно согласовываем прилагательные по роду и числу, т.е используем нужное окончание в зависимости от контекста.
      Например, мы говорим: <i>он милый</i>, <i>она милая</i>.
      В чешском языке для этого используются следующие окончания:
    </p>
    <ul>
      <li>Мужской род — <b>-ý</b></li>
      <li>Женский род — <b>-á</b></li>
      <li>Средний род — <b>-é</b></li>
      <li>"мы", "они" — <b>-í</b> для мужского и женского рода, и окончание <b>-á</b> или <b>-í</b> для среднего</li>
    </ul>
    <p>Закрепим на примерах:</p>
    <ul>
      <li>On je mil<b>ý</b>. — Он милый.</li>
      <li>Ona je mil<b>á</b>. — Она милая.</li>
      <li>Oni jsou mil<b>í</b>. — Они милые.</li>
      <li>krásn<b>á</b> květina<i>(она)</i> — красивый цветок. Слово "цветок" в чешском языке имеет женский род.</li>
      <li>vysok<b>ý</b> chlapec<i>(он)</i> — высокий мальчик.</li>
      <li>hlubok<b>é</b><i>(оно)</i> jezero — голубое озеро.</li>
    </ul>
    <h3>Употребление местоимений</h3>
    <p>
      В данном уроке для наглядности мы употребляли местоимения совместно с глаголом быть, но в разговорной речи личные местоимения
      практически не употребляются, лицо определяется глаголом, поэтому вместо <i>Já <b>nejsem</b> doma</i> скажем
      <i><b>Nejsem</b> doma</i>.
    </p>
  `;

  questions: ILessonQuestion[] = [
    {
      question: 'Ознакомтесь с теоретическим материалом и напишите "готов"',
      answer: 'готов',
      onError: 'Напишите "готов", если вы ознакомились с теоретическим материалом'
    },
    {
      question: 'Переведите: Я дома',
      answer: ['Já jsem doma', 'Jsem doma']
    },
    {
      question: 'Задайте вопрос: Ты дома?',
      answer: ['Ty jsi doma?', 'Jsi doma?']
    },
    {
      question: 'Переведите: Я не дома',
      answer: ['Já nejsem doma', 'Nejsem doma']
    },
    {
      question: 'Переведите: Я русский',
      answer: ['Já jsem Rus', 'Jsem Rus']
    },
    {
      question: 'Задайте вопрос: Ты русский?',
      answer: ['Ty jsi Rus?', 'Jsi Rus?']
    },
    {
      question: 'Переведите: Я не русский',
      answer: ['Já nejsem Rus', 'Nejsem Rus']
    },
    {
      question: 'Переведите: Дети на улице',
      answer: 'Děti jsou venku'
    },
    {
      question: 'Задайте вопрос: Дети на улице?',
      answer: 'Děti jsou venku?'
    },
    {
      question: 'Переведите: Дети не на улице',
      answer: 'Děti nejsou venku'
    },
    {
      question: 'Переведите: Мы в школе',
      answer: 'My jsme ve škole'
    },
    {
      question: 'Задайте вопрос: Они в школе?',
      answer: 'Oni jsou ve škole?'
    },
    {
      question: 'Переведите: Мы не в школе',
      answer: 'My nejsme ve škole'
    },
    {
      question: 'Переведите: Он студент',
      answer: 'On je student'
    },
    {
      question: 'Задайте вопрос: Вы студент?',
      answer: 'Vy jste student?'
    },
    {
      question: 'Переведите: Он не студент',
      answer: 'On není student'
    },
    {
      question: 'Переведите: Я на работе',
      answer: ['Já jsem v práci', 'Jsem v práci']
    },
    {
      question: 'Задайте вопрос: Ты русский?',
      answer: ['Ty jsi Rus?', 'Jsi Rus?']
    },
    {
      question: 'Переведите: Я не на работе',
      answer: ['Já nejsem v práci', 'Nejsem v práci']
    },
    {
      question: 'Переведите: Он врач',
      answer: ['On je doktor', 'Je doktor']
    },
    {
      question: 'Задайте вопрос: Он врач?',
      answer: ['On je doktor?', 'Je doktor?']
    },
    {
      question: 'Переведите: Он не врач',
      answer: ['On není doktor', 'Není doktor']
    },
    {
      question: 'Переведите: Они мои родители',
      answer: ['Oni jsou moji rodiče', 'Jsou moji rodiče']
    },
    {
      question: 'Задайте вопрос: Они твои родители?',
      answer: 'Oni jsou tvoji rodiče?'
    },
    {
      question: 'Переведите: Они не мои родители',
      answer: 'Oni nejsou moji rodiče'
    }
  ];
}

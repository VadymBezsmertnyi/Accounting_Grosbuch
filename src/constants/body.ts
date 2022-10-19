import { femaleIcon, fopBodyList, legalBodyList, maleIcon } from '../images';
import { TDefaultDate } from '../types/body';

export const BODY_DEFAULT_DATE: TDefaultDate[] = [
  {
    id: 1,
    type: 'other',
    imgMain: '',
    listDate: [
      {
        id: 1,
        imgLogo: femaleIcon,
        text: `Бухгалтерський супровід — одна з найважливіших складових бізнесу, який необхідний для надання інформації про фінансове становище, результати діяльності та рух грошових коштів підприємства`,
      },
      {
        id: 2,
        imgLogo: maleIcon,
        text: `Наша компанія має високий рівень якості професійних умінь та тавичок і пропонує клієнтам послуг відповідно до обраної системи оподаткування`,
      },
    ],
  },
  {
    id: 2,
    type: 'list',
    imgMain: legalBodyList,
    title: `Бухгалтерські послуги для юридичних осіб`,
    listDate: [
      {
        id: 1,
        title: 'Бухгалтерський облік',
        listOther: [
          {
            id: 1,
            title: 'Підготовка, аналіз та обробка первинних документів',
            otherTitle: [
              'Рахунок-фактура/Інвойс',
              'Видаткова накладна',
              'Акт виконаних/наданих робіт та послуг',
              'Товарно-транспортна накладна',
              'Прибутковий/Видатковий касовий ордер',
              'Бухгалтерська довідка',
            ],
          },
          {
            id: 2,
            title: 'Обробка та внесення документації в базу 1С',
            otherTitle: [''],
          },
          {
            id: 3,
            title: 'Формування та ведення касового документообігу',
            otherTitle: [''],
          },
          {
            id: 4,
            title: 'Проведення актів звірок з контрагентами замовника',
            otherTitle: [''],
          },
        ],
      },
      {
        id: 2,
        title: 'Зарплата та кадри',
        listOther: [
          {
            id: 1,
            title: 'Нарахування та виплата заробітної плати',
            otherTitle: [],
          },
          {
            id: 2,
            title: 'Розрахунок відпускних, лікарняних та пільг',
            otherTitle: [],
          },
          {
            id: 3,
            title: 'Розрахунок та виплата при звільненні',
            otherTitle: [],
          },
          {
            id: 4,
            title: 'Ведення кадрового обліку',
            otherTitle: [
              'Прийом та звільнення працівників',
              'Створення та формування наказів',
              'Підготовка трудових договорів відповідно до вимог діючого законодавства',
              'Заповнення трудових книжок, їх зберігання',
              'Ведення табелю обліку робочого часу',
              'Формування графіку відпусток',
              'Складання штатного розкладу',
              'Заповнення особових карток співробітників',
              'Формування довідок про доходи працівникам підприємства',
              'Формування довідок про заробітну плату для розрахунку виплат',
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'Податковий облік',
        listOther: [
          {
            id: 1,
            title: 'Розрахунок податків та зборів',
            otherTitle: [],
          },
          {
            id: 2,
            title: 'Контроль нарахування та сплати податків',
            otherTitle: [],
          },
          {
            id: 3,
            title:
              'Підготовка та здача звітності – місячна; квартальна; річна;',
            otherTitle: [],
          },
          {
            id: 4,
            title:
              'Формування та реєстрація податкових накладних у Єдиному реєстрі податкових накладних',
            otherTitle: [],
          },
        ],
        secondTitle: {
          title: 'Разова подача звітності',
          otherTitle: [
            'Внутрішньогосподарська (управлінська)',
            'Фінансова',
            'Податкова',
          ],
        },
      },
    ],
  },
  {
    id: 3,
    type: 'list',
    title: `Бухгалтерські послуги для фізичних осіб-підприємців`,
    imgMain: fopBodyList,
    listDate: [
      {
        id: 1,
        title: 'Бухгалтерський облік',
        listOther: [
          {
            id: 1,
            title: 'Підготовка, аналіз та обробка первинних документів',
            otherTitle: [
              'Рахунок-фактура/Інвойс',
              'Видаткова накладна',
              'Акт виконаних/наданих робіт та послуг',
              'Товарно-транспортна накладна',
              'Прибутковий/Видатковий касовий ордер',
              'Бухгалтерська довідка',
            ],
          },
          {
            id: 2,
            title: 'Обробка та внесення документації в базу 1С',
            otherTitle: [''],
          },
          {
            id: 3,
            title: 'Формування та ведення касового документообігу',
            otherTitle: [''],
          },
          {
            id: 4,
            title: 'Проведення актів звірок з контрагентами замовника',
            otherTitle: [''],
          },
        ],
      },
      {
        id: 2,
        title: 'Зарплата та кадри',
        listOther: [
          {
            id: 1,
            title: 'Нарахування та виплата заробітної плати',
            otherTitle: [],
          },
          {
            id: 2,
            title: 'Розрахунок відпускних, лікарняних та пільг',
            otherTitle: [],
          },
          {
            id: 3,
            title: 'Розрахунок та виплата при звільненні',
            otherTitle: [],
          },
          {
            id: 4,
            title: 'Ведення кадрового обліку',
            otherTitle: [
              'Прийом та звільнення працівників',
              'Створення та формування наказів',
              'Підготовка трудових договорів відповідно до вимог діючого законодавства',
              'Заповнення трудових книжок, їх зберігання',
              'Ведення табелю обліку робочого часу',
              'Формування графіку відпусток',
              'Складання штатного розкладу',
              'Заповнення особових карток співробітників',
              'Формування довідок про доходи працівникам підприємства',
              'Формування довідок про заробітну плату для розрахунку виплат',
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'Податковий облік',
        listOther: [
          {
            id: 1,
            title: 'Розрахунок податків та зборів',
            otherTitle: [],
          },
          {
            id: 2,
            title: 'Контроль нарахування та сплати податків',
            otherTitle: [],
          },
          {
            id: 3,
            title: 'Контроль обороту відповідно до групи ФОП',
            otherTitle: [],
          },
          {
            id: 4,
            title:
              'Підготовка та здача звітності – місячна; квартальна; річна;',
            otherTitle: [],
          },
          {
            id: 5,
            title:
              'Формування та реєстрація податкових накладних у Єдиному реєстрі податкових накладних',
            otherTitle: [],
          },
        ],
      },
    ],
  },
];

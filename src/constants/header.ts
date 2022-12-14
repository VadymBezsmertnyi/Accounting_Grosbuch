import { TContact, TNavigateMenu } from '../types/header';

export const NAME_COMPANY: string = `ТОВ «Гросбух ГмбХ»`;

export const LIST_NAVIGATE_MENU: TNavigateMenu[] = [
  { id: 1, title: 'Про компанію', href: '#aboutUs' },
  { id: 2, title: 'Послуги', href: '#services' },
  { id: 3, title: 'Контакти', href: '#contact' },
  { id: 4, title: 'Зв’язок', href: '#feedback' },
];

export const LIST_CONTACTS: TContact[] = [
  {
    id: 1,
    icon: 'location',
    typeShow: 'header',
    title: 'м. Київ',
    href: 'https://goo.gl/maps/nJNowR5HEJQqUrCFA',
  },
  {
    id: 2,
    icon: 'phone',
    typeShow: 'header',
    title: '+38 (097) 490-83-77',
    href: 'tel:+380974908377',
  },
  {
    id: 3,
    icon: 'phone',
    typeShow: 'footer',
    title: '+38 (097) 490-83-77',
    href: 'tel:+380974908377',
  },
  {
    id: 4,
    icon: 'email',
    typeShow: 'footer',
    title: 'grosbuch2021@ukr.net',
    href: 'grosbuch2021@ukr.net',
  },
  {
    id: 5,
    icon: 'location',
    typeShow: 'footer',
    title: 'м. Київ, вулиця Старосільська 1-К, офіс 80',
    href: 'https://goo.gl/maps/nJNowR5HEJQqUrCFA',
  },
];

export const TITLE_INFO_HEADER: string = 'Компанія ТОВ «Гросбух ГмбХ»';

export const OTHER_TITLE_INFO_HEADER_FIRST: string =
  'Різноманітний асортимент послуг';

export const OTHER_TITLE_INFO_HEADER_SECOND: string =
  'з ведення бухгалтерського обліку';

export type TListOther = {
  id: number | string;
  title: string;
  otherTitle: string[];
};

export type TSecondTitleList = {
  title: string;
  otherTitle: string[];
};

export type TListDate = {
  id: number | string;
  title?: string;
  imgLogo?: string;
  text?: string;
  listOther?: TListOther[];
  secondTitle?: TSecondTitleList;
};

export type TDefaultDate = {
  id: number | string;
  type: 'other' | 'list';
  href?: string;
  imgMain: string;
  title?: string;
  listDate?: TListDate[];
  listOther?: TListOther[];
};

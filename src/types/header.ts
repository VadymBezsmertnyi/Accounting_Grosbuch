export type TNavigateMenu = { id: number; title: string; href: string };

export type TContact = {
  id: number;
  icon: 'location' | 'phone' | 'email';
  typeShow: string;
  title: string;
  href: string;
};

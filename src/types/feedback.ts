export type TFeedback = {
  name: string;
  phone: string;
  email: string;
  recaptcha: boolean;
  activity: string[];
  taxationSystem: string[];
  ownership: string[];
};

export type TErrorsFeedback = {
  name?: string;
  phone?: string;
  email?: string;
  activity?: string | string[];
  recaptcha?: string;
  taxationSystem?: string | string[];
  ownership?: string | string[];
};

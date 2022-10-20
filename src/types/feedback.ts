export type TFeedback = {
  name: string;
  phone: string;
  email: string;
  activity: string[];
  taxationSystem: string[];
  ownership: string[];
};

export type TErrorsFeedback = {
  name?: string;
  phone?: string;
  email?: string;
  activity?: string;
  taxationSystem?: string;
  ownership?: string;
};

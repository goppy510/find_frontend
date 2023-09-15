import { IconType } from 'react-icons';

export type CategoryIconDetail = {
  icon: IconType;
  bg: string;
};

export type CategoryIconDetails = {
  [category: string]: CategoryIconDetail;
};

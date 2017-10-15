import { shape, number, string } from 'prop-types';

export const ITEM_SHAPE = shape({
  id: number,
  title: string,
  link: string,
  description: string
});

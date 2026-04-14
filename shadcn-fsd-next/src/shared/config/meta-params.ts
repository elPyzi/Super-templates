export const DIRECTIONS = {
  ASC: 'asc',
  DESC: 'desc',
} as const;

export type DIRECTIONS = (typeof DIRECTIONS)[keyof typeof DIRECTIONS];

export const SIZE = {
  SMALL: 15,
  MEDIUM: 30,
  BIG: 50,
  HUGE: 100,
};

export type SIZE = (typeof SIZE)[keyof typeof SIZE];

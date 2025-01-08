/**
 * Utility to get the next available order value for a new item in an array.
 * @param items - Array of objects containing an `order` field.
 * @returns The next order value as `number`.
 */

export const getNextOrder = <T extends { order: number }>(items: T[]): number => {
  return Math.max(...items.map((item) => item.order), 0) + 1;
};

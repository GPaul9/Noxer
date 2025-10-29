export const formatRub = (value: number | string): string => {
  const num = typeof value === 'string' ? Number(value) : value;
  return new Intl.NumberFormat('ru-RU').format(num) + ' ₽';
};

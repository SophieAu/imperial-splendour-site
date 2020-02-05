export const circularModulo = (base: number) => (value: number) =>
  value < 0 ? base + value : value % base;

export const cn = (className?: string | false) => (!!className ? ` ${className}` : '');

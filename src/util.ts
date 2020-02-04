export const cn = (defaulClass: string, extraClass?: string) =>
  `${defaulClass}${extraClass ? ` ${extraClass}` : ''}`;

export const circularModulo = (base: number) => (value: number) =>
  value < 0 ? base + value : value % base;

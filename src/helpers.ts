export const cn = (defaulClass: string, extraClass?: string) =>
  `${defaulClass}${extraClass ? ` ${extraClass}` : ''}`;

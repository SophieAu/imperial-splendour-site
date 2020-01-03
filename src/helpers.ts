export const getSlug = (title: string, date: string) => {
  const formattedTitle = title
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/(-+)/g, '-');
  return `${date}-${formattedTitle}`;
};

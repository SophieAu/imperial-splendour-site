export type NameLinkTuple = { name: string; link: string };

export const formatStringList = (strings: string[]) => {
    const isLast = (i: number) => i === strings.length - 1;
    const isFirst = (i: number) => i === 0;

    return strings.reduce((s, b, i) => {
        let prefix: string;
        if (isFirst(i)) prefix = '';
        else if (isLast(i)) prefix = ' and ';
        else prefix = ', ';

        return s + prefix + b;
    }, '');
};

export const formatLinkList = (items: NameLinkTuple[]) =>
    formatStringList(items.map(({ name, link }) => `<a href="${link}" target="_blank" rel="noopener noreferrer">${name}</a>`));

export const createPostSlug = (title: string, date: Date) => {
    const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD
    const slug = title
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/[^\w-]/g, '')
        .replace(/(-+)/g, '-');
    return `${dateStr}-${slug}`;
}
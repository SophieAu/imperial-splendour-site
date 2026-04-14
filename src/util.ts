export const createPostSlug = (title: string, date: Date) => {
    const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD
    const slug = title
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/[^\w-]/g, '')
        .replace(/(-+)/g, '-');
    return `${dateStr}-${slug}`;
}
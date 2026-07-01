import { getCollection } from "astro:content";

export const getFirstFactionSlug = async () => {
    const factions = await getCollection("factions");
    return factions.sort((a, b) => a.data.slug.localeCompare(b.data.slug))[0].data.slug;
};

export type NameLinkTuple = { name: string; link: string };

const formatStringList = (strings: string[]) => {
    const isLast = (i: number) => i === strings.length - 1;
    const isFirst = (i: number) => i === 0;

    return strings.reduce((s, b, i) => {
        let prefix: string;
        if (isFirst(i)) prefix = "";
        else if (isLast(i)) prefix = " and ";
        else prefix = ", ";

        return s + prefix + b;
    }, "");
};

export const formatLinkList = (items: NameLinkTuple[]) =>
    formatStringList(
        items.map(({ name, link }) =>
            `<a href="${link}" target="_blank" rel="noopener noreferrer">${name}</a>`
        ),
    );

export const formatDate = (date: string | Date) =>
    new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

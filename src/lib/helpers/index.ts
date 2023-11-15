interface slugifyOptions {
    inverse?: boolean;
    replacement?: string;
}
export const slugify = (str: string, options: slugifyOptions = { inverse: false, replacement: "+" },): string => {
    if (options.inverse) {
        return str
            .toLowerCase()
            .replace(/[^\w-]+/g, options.replacement!)
            .replace(/[^\w-]+/g, " ");
    }
    return str
        .replace(/ /g, "+")

};
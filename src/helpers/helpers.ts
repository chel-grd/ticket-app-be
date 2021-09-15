export function firstLetterUppercase(str: string) {
    const valueStr = str.toLowerCase();
    return `${valueStr.charAt(0).toUpperCase()}${valueStr.slice(1)}`;
}
export const getRandomColor = (): string => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

export function adjust(color: string, amount: number) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

export const getRandomFloat = (min: number, max: number): string => {
    return (Math.random() / min * max).toFixed(2);
}
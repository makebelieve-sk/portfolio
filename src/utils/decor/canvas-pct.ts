export const CANVAS_W = 1920;

export const HEADER_H = 1144;

export function pctX(px: number) {
    return `${(px / CANVAS_W) * 100}%`;
}

export function pctW(px: number) {
    return `${(px / CANVAS_W) * 100}%`;
}

export function hPctY(px: number) {
    return `${(px / HEADER_H) * 100}%`;
}

export function hPctH(px: number) {
    return `${(px / HEADER_H) * 100}%`;
}

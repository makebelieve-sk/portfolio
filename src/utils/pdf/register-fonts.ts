import { Font } from "@react-pdf/renderer";

let registered = false;

export function registerFonts(origin: string) {
    if (registered) return;
    registered = true;

    Font.register({
        family: "Inter",
        fonts: [
            { src: `${origin}/fonts/Inter-Regular.ttf`, fontWeight: 400 },
            { src: `${origin}/fonts/Inter-Medium.ttf`, fontWeight: 500 },
            { src: `${origin}/fonts/Inter-SemiBold.ttf`, fontWeight: 600 },
            { src: `${origin}/fonts/Inter-Bold.ttf`, fontWeight: 700 },
        ],
    });

    Font.register({
        family: "Bebas Neue",
        src: `${origin}/fonts/BebasNeueCyrillic.ttf`,
    });

    Font.registerHyphenationCallback((word) => [word]);
}

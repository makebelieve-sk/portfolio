export const FW = 1920;
export const FH = 370;
export const fpx = (px: number) => `${(px / FW) * 100}%`;
export const fpw = (px: number) => `${(px / FW) * 100}%`;
export const fpy = (px: number) => `${(px / FH) * 100}%`;

export const PHONE = "+7 (950) 655-45-87";
export const PHONE_HREF = "tel:+79506554587";
export const EMAIL = "skryabin.aleksey99@gmail.com";
export const EMAIL_HREF = "mailto:skryabin.aleksey99@gmail.com";

export const QR_CODES = [
    {
        src: "/slides/footer/qr-telegram.png",
        altKey: "qrTelegramAlt",
        href: "https://t.me/makebelieve_sk",
        x: 829,
        y: 98,
        w: 154,
    },
    {
        src: "/slides/footer/qr-vk.png",
        altKey: "qrVkAlt",
        href: "https://vk.com/makebelieve_sk",
        x: 1013,
        y: 98,
        w: 154,
    },
    {
        src: "/slides/footer/qr-github.png",
        altKey: "qrGithubAlt",
        href: "https://github.com/makebelieve-sk",
        x: 1197,
        y: 98,
        w: 153,
    },
    {
        src: "/slides/footer/qr-gitlab.png",
        altKey: "qrGitlabAlt",
        href: "https://gitlab.com/makebelieve99",
        x: 1380,
        y: 96,
        w: 158,
    },
    {
        src: "/slides/footer/qr-linkedin.png",
        altKey: "qrLinkedinAlt",
        href: "https://www.linkedin.com/in/makebelieve-sk",
        x: 1568,
        y: 96,
        w: 158,
    },
] as const;

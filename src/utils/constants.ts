export const GRADIENT_TEXT = "linear-gradient(90deg, #0F3987 0%, #00215E 100%)";

export const BULLET_GRADIENT = "radial-gradient(circle at 50% 50%, #0551DC 0%, #012361 100%)";

export const ANIM_MS = 200;

export const SCROLL_THRESHOLD = 200;

export const gradientClip = {
    backgroundImage: GRADIENT_TEXT,
    WebkitBackgroundClip: "text" as const,
    backgroundClip: "text" as const,
};

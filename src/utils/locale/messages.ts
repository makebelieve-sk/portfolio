import type { Locale } from "@/types/locale/locale";

import enAboutMe from "@/locales/en/about-me.json";
import enCourses from "@/locales/en/courses.json";
import enEducation from "@/locales/en/education.json";
import enError from "@/locales/en/error.json";
import enExperience from "@/locales/en/experience.json";
import enFooter from "@/locales/en/footer.json";
import enIntro from "@/locales/en/intro.json";
import enNotFound from "@/locales/en/not-found.json";
import ruAboutMe from "@/locales/ru/about-me.json";
import ruCourses from "@/locales/ru/courses.json";
import ruEducation from "@/locales/ru/education.json";
import ruError from "@/locales/ru/error.json";
import ruExperience from "@/locales/ru/experience.json";
import ruFooter from "@/locales/ru/footer.json";
import ruIntro from "@/locales/ru/intro.json";
import ruNotFound from "@/locales/ru/not-found.json";

export const ru = {
    ...ruIntro,
    ...ruAboutMe,
    ...ruExperience,
    ...ruEducation,
    ...ruCourses,
    ...ruFooter,
    ...ruError,
    ...ruNotFound,
};

export const en = {
    ...enIntro,
    ...enAboutMe,
    ...enExperience,
    ...enEducation,
    ...enCourses,
    ...enFooter,
    ...enError,
    ...enNotFound,
};

export const messages = { ru, en } satisfies Record<Locale, typeof ru>;

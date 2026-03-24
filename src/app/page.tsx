"use client";

import AboutMe from "@/components/slides/about-me";
import Intro from "@/components/slides/intro";
import Experience from "@/components/slides/experience";
import Education from "@/components/slides/education";
import Courses from "@/components/slides/courses";
import SiteFooter from "@/components/slides/footer";

export default function Home() {
    return (
        <main className="min-h-0 min-w-0">
            <Intro />
            <AboutMe />
            <Experience />
            <Education />
            <Courses />
            <SiteFooter />
        </main>
    );
}

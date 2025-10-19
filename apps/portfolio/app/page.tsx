import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <React.Fragment>
      <div className="mx-auto flex h-screen w-4xl flex-row">
        <div className="mx-auto flex h-full w-3/4 max-w-7xl flex-row">
          {/* Double Vertical Line */}
          <div className="flex flex-row gap-12">
            <div className="h-full w-10 border-r border-l border-white bg-[#48A860] opacity-25"></div>
          </div>
          <div className="flex h-full flex-col overflow-y-auto px-4 py-2">
            {/* Header */}
            <header className="mx-auto flex h-16 w-full">
              {/* Logo */}
              <div className="flex items-center">
                <span className="text-3xl font-bold text-white">Portfoli</span>
                <span className="text-3xl font-bold text-[#48A860]">o</span>
              </div>
            </header>

            {/* About */}
            <section id="about">
              <p className={styles.cool}>
                <span data-text="Hi,">Hi,</span>
                <span data-text=" &nbsp;I'm"> &nbsp;I&apos;m</span>
                <span data-text=" &nbsp;Vy."> &nbsp;Vy.</span>
                <br />
                <span data-text="Nice">Nice</span>
                <span data-text=" &nbsp;to"> &nbsp;to</span>
                <span data-text=" &nbsp;meet"> &nbsp;meet</span>
                <span data-text=" &nbsp;you!"> &nbsp;you!</span>
              </p>
              <br />
              <p className="text-white">
                I&apos;m <b>Huynh Hong Vy</b>, a software engineer with a
                passion for building backend systems. I previously worked at
                <a href="https://cozwork.com/vi/" className="text-white">
                  &nbsp;
                  <b>Cozwork JSC</b> as a Backend Developer. I&apos;m now open
                  to new opportunities and available for hire.
                </a>
              </p>
            </section>

            {/* Skills */}
            <section id="skills"></section>

            {/* Projects */}
            <section id="projects"></section>

            {/* Contact */}
            <section id="contact"></section>

            {/* Footer */}
            <footer id="footer"></footer>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex h-full w-1/4 flex-col justify-center border-r border-white bg-red-950">
          <nav className="flex flex-col items-center gap-4">
            <Link href="#about" className="text-white">
              <span className="text-white">About</span>
            </Link>
            <Link href="#skills" className="text-white">
              <span className="text-white">Skills</span>
            </Link>
            <Link href="#projects" className="text-white">
              <span className="text-white">Projects</span>
            </Link>
            <Link href="#contact" className="text-white">
              <span className="text-white">Contact</span>
            </Link>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}

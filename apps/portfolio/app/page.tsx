import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { ProjectsSection } from "./components/ProjectSection";
import {
  DockerIcon,
  GitHubIcon,
  GitIcon,
  GoIcon,
  HomebrewIcon,
  LinuxIcon,
  MongoDBIcon,
  MySQLIcon,
  NodeIcon,
  PostgreSQLIcon,
  RedisIcon,
  TypeScriptIcon,
} from "./constants";
import { fetchUserRepos } from "./lib/github";
import styles from "./page.module.css";

export default async function Home() {
  const repos = await fetchUserRepos("vixyninja");
  return (
    <React.Fragment>
      <div className="mx-auto flex h-screen w-full flex-col lg:w-4xl xl:w-5xl">
        <div className="mx-auto flex h-full w-full max-w-7xl flex-row">
          <div className="flex flex-row gap-12">
            <div className="h-full w-10 border-white bg-[#48A860] opacity-25"></div>
          </div>
          <div className="relative mx-auto flex w-full max-w-7xl flex-col overflow-y-auto pt-2">
            {/* Header */}
            <header className="mx-auto flex h-16 w-full items-center justify-between px-4">
              {/* Logo */}
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white sm:text-3xl">
                  Portfoli
                </span>
                <span className="text-2xl font-bold text-[#48A860] sm:text-3xl">
                  o
                </span>
              </div>
            </header>

            {/* Avatar */}
            <div className="avatar absolute top-6 right-10 hidden h-24 w-24 lg:block">
              <Link href={"/avatar.jpg"} target="_blank">
                <Image
                  alt="Huynh Hong Vy"
                  src={"/ares/avatar.jpg"}
                  className="w-20 rounded-full border object-cover object-top ring-2 ring-[#48A860] ring-offset-2 ring-offset-[#ffbbbb] sm:w-24"
                  fill={true}
                  draggable={false}
                />
              </Link>
            </div>

            {/* About */}
            <section id="about">
              <p
                className={
                  styles.cool +
                  " px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                }
              >
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
              <p className="px-4 pb-4 indent-8 text-sm text-white italic sm:indent-10 sm:text-base">
                &quot;I&apos;m Huynh Hong Vy, a software engineer with a passion
                for building backend systems. I&apos;m now open to new
                opportunities and available for hire. Backend developer focused
                on <b>Go</b>
                ,&nbsp;
                <b>Node.js</b>, and <b>Clean Architecture</b>.&quot;
              </p>
            </section>
            {/* Skills */}
            <section id="skills">
              <div className="mt-2">
                <span className="px-4 text-xl font-bold text-white">
                  Skills
                </span>

                <div>
                  <div>
                    <h3 className="mt-2 px-4 text-sm font-semibold text-white/80">
                      Languages & Runtime
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2 px-4">
                      <div className="badge badge-outline h-8 gap-2 text-white">
                        <GoIcon className="h-5 w-5" href="https://go.dev/" />
                        Go
                      </div>
                      <div className="badge badge-outline h-8 gap-2 text-white">
                        <TypeScriptIcon
                          className="h-5 w-5"
                          href="https://www.typescriptlang.org/"
                        />
                        TypeScript
                      </div>
                      <div className="badge badge-outline h-8 gap-2 text-white">
                        <NodeIcon
                          className="h-5 w-5"
                          href="https://nodejs.org/"
                        />
                        Node.js
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mt-2 px-4 text-sm font-semibold text-white/80">
                      Tools
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2 px-4">
                      <div className="badge badge-outline h-8 gap-2 px-4 text-white">
                        <GitIcon
                          className="h-5 w-5"
                          href="https://git-scm.com/"
                        />
                        Git
                      </div>
                      <div className="badge badge-outline h-8 gap-2 text-white">
                        <GitHubIcon
                          className="h-5 w-5"
                          href="https://github.com/"
                        />
                        GitHub
                      </div>
                      <div className="badge badge-outline h-8 gap-2 text-white">
                        <DockerIcon
                          className="h-5 w-5"
                          href="https://www.docker.com/"
                        />
                        Docker
                      </div>
                      <div className="badge badge-outline h-8 gap-2 text-white">
                        <LinuxIcon
                          className="h-5 w-5"
                          href="https://www.linux.org/"
                        />
                        Linux
                      </div>
                      <div className="badge badge-outline h-8 gap-2 text-white">
                        <HomebrewIcon
                          className="h-5 w-5"
                          href="https://brew.sh/"
                        />
                        Homebrew
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mt-2 px-4 text-sm font-semibold text-white/80">
                      Databases
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2 px-4">
                      <div className="badge badge-outline h-8 gap-2 text-white">
                        <MySQLIcon
                          className="h-5 w-5"
                          href="https://www.mysql.com/"
                        />
                        MySQL
                      </div>
                      <div className="badge badge-outline h-8 gap-2 text-white">
                        <PostgreSQLIcon
                          className="h-5 w-5"
                          href="https://www.postgresql.org/"
                        />
                        PostgreSQL
                      </div>
                      <div className="badge badge-outline h-8 gap-2 text-white">
                        <MongoDBIcon
                          className="h-5 w-5"
                          href="https://www.mongodb.com/"
                        />
                        MongoDB
                      </div>
                      <div className="badge badge-outline h-8 gap-2 text-white">
                        <RedisIcon
                          className="h-5 w-5"
                          href="https://redis.io/"
                        />
                        Redis
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Projects */}
            <ProjectsSection repos={repos} />

            {/* Footer */}
            <section id="footer">
              <footer className="mt-16 flex flex-col items-center justify-center text-white">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-xl font-bold text-white">
                    Huynh Hong Vy
                  </h2>
                  <p className="text-sm text-white/80">
                    Backend Developer • <b>Go</b> & <b>Node.js</b>
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                  <nav className="mt-2 grid grid-flow-col gap-6">
                    <a
                      href="https://github.com/vixyninja"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      <FaGithub size={22} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/vixyninja"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      <FaLinkedin size={22} />
                    </a>
                    <a
                      href="mailto:hhvy2003.dev@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      <FaEnvelope size={22} />
                    </a>
                  </nav>

                  <div className="mt-3 pb-4">
                    <p className="text-sm opacity-60">
                      © {new Date().getFullYear()} Huynh Hong Vy — All rights
                      reserved.
                    </p>
                  </div>
                </div>
              </footer>
            </section>
          </div>
          <div className="flex flex-row gap-12">
            <div className="h-full w-10 border-white bg-[#ff0000] opacity-25"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

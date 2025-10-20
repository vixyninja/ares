import React from "react";
import Image from "next/image";

export const GitHubIcon = ({
  className = "w-6 h-6",
  href = "#",
}: {
  className?: string;
  href?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image
      src="/github-light.svg"
      alt="GitHub"
      width={30}
      height={30}
      className={className}
    />
  </a>
);

export const LinkedInIcon = ({
  className = "w-6 h-6",
  href = "#",
}: {
  href?: string;
  className?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image
      src="/linkedin.svg"
      alt="LinkedIn"
      width={30}
      height={30}
      className={className}
    />
  </a>
);

export const FacebookIcon = ({
  className = "w-6 h-6",
  href = "#",
}: {
  className?: string;
  href?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image
      src="/facebook.svg"
      alt="Facebook"
      width={30}
      height={30}
      className={className}
    />
  </a>
);

export const InstagramIcon = ({
  className = "w-6 h-6",
  href = "#",
}: {
  href?: string;
  className?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image
      src="/instagram.svg"
      alt="Instagram"
      width={30}
      height={30}
      className={className}
    />
  </a>
);

export const ReactIcon = ({
  className = "w-6 h-6",
  href = "#",
}: {
  className?: string;
  href?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image
      src="/reactjs.svg"
      alt="React"
      width={30}
      height={30}
      className={className}
    />
  </a>
);

export const NodeIcon = ({
  className = "w-6 h-6",
  href = "#",
}: {
  className?: string;
  href?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image
      src="/nodejs.svg"
      alt="Node.js"
      width={30}
      height={30}
      className={className}
    />
  </a>
);

export const GoIcon = ({
  className = "w-6 h-6",
  href = "#",
}: {
  className?: string;
  href?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image
      src="/go.svg"
      alt="Go"
      width={30}
      height={30}
      className={className}
    />
  </a>
);

export const TypeScriptIcon = ({
  className = "w-6 h-6",
  href = "#",
}: {
  href?: string;
  className?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image
      src="/typescript.svg"
      alt="TypeScript"
      width={30}
      height={30}
      className={className}
    />
  </a>
);

export const AngularIcon = ({
  className = "w-6 h-6",
  href = "#",
}: {
  href?: string;
  className?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image
      src="/angular.svg"
      alt="Angular"
      width={30}
      height={30}
      className={className}
    />
  </a>
);

export const DockerIcon = ({
  className = "w-6 h-6",
  href = "#",
}: {
  href?: string;
  className?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image
      src="/docker.svg"
      alt="Docker"
      width={30}
      height={30}
      className={className}
    />
  </a>
);

export const LinuxIcon = ({
  className = "w-6 h-6",
  href = "#",
}: {
  href?: string;
  className?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image
      src="/linux.svg"
      alt="Linux"
      width={30}
      height={30}
      className={className}
    />
  </a>
);

export const MongoDBIcon = ({
  className = "w-6 h-6",
  href = "#",
}: {
  href?: string;
  className?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image
      src="/mongodb.svg"
      alt="MongoDB"
      width={30}
      height={30}
      className={className}
    />
  </a>
);

export const PostgreSQLIcon = ({
  className = "w-6 h-6",
  href = "#",
}: {
  className?: string;
  href?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image
      src="/postgresql.svg"
      alt="PostgreSQL"
      width={30}
      height={30}
      className={className}
    />
  </a>
);

export const MySQLIcon = ({
  className = "w-6 h-6",
  href = "#",
}: {
  href?: string;
  className?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image
      src="/mysql.svg"
      alt="MySQL"
      width={30}
      height={30}
      className={className}
    />
  </a>
);

export const RedisIcon = ({
  className = "w-6 h-6",
  href = "#",
}: {
  href?: string;
  className?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image
      src="/redis.svg"
      alt="Redis"
      width={30}
      height={30}
      className={className}
    />
  </a>
);

export const GitIcon = ({
  className = "w-6 h-6",
  href = "#",
}: {
  className?: string;
  href?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image
      src="/git.svg"
      alt="Git"
      width={30}
      height={30}
      className={className}
    />
  </a>
);

export const HomebrewIcon = ({
  className = "w-6 h-6",
  href = "#",
}: {
  className?: string;
  href?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image
      src="/homebrew.svg"
      alt="Homebrew"
      width={30}
      height={30}
      className={className}
    />
  </a>
);

export const EmailIcon = ({
  className = "w-6 h-6",
  href = "#",
}: {
  className?: string;
  href?: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 30 30"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  </a>
);

"use client";

import { GithubRepo } from "../lib/github";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection({ repos }: { repos: GithubRepo[] }) {
  return (
    <section id="projects" className="mt-6">
      {/* Header */}
      <div className="mb-2">
        <h2 className="px-4 text-2xl font-bold text-white">Projects</h2>
        <p className="px-4 text-sm text-white/80 opacity-70">
          Some of my featured open-source and personal projects.
        </p>
      </div>

      {/* Grid layout */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <ProjectCard
            key={repo.id}
            name={repo.name}
            description={repo.description ?? ""}
            language={repo.language ?? undefined}
            stars={repo.stargazers_count}
            href={repo.html_url}
            className="w-full"
          />
        ))}
      </div>
    </section>
  );
}

"use client";
import Link from "next/link";

type ProjectCardProps = {
  name: string;
  description?: string;
  stars?: number;
  language?: string;
  href: string;
};

export function ProjectCard({
  name,
  description,
  stars,
  language,
  href,
}: ProjectCardProps) {
  return (
    <div className="card border border-white text-white/80 shadow-md">
      <div className="card-body gap-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="card-title text-lg text-white">{name}</h3>
          {language ? (
            <span className="badge badge-outline text-base-content/80 rounded-full text-xs">
              {language}
            </span>
          ) : null}
        </div>
        {description ? (
          <p className="text-sm text-white/80">{description}</p>
        ) : null}

        <div className="card-actions mt-2 items-center justify-between">
          <div className="text-base-content/70 flex items-center gap-3 text-xs">
            {typeof stars === "number" ? (
              <span className="inline-flex items-center gap-1">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.868 1.401-8.168L.132 9.209l8.2-1.191z" />
                </svg>
                {stars}
              </span>
            ) : null}
          </div>
          <Link href={href} target="_blank" className="btn btn-sm btn-outline">
            View Repo
          </Link>
        </div>
      </div>
    </div>
  );
}

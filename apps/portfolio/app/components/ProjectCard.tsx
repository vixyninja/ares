import Link from "next/link";

type ProjectCardProps = {
  name: string;
  description?: string;
  stars?: number;
  language?: string;
  href: string;
  className?: string;
};

export function ProjectCard({
  name,
  description,
  stars,
  language,
  href,
  className,
}: ProjectCardProps) {
  return (
    <div
      className={`card h-full min-h-[180px] border border-green-100/50 text-white/90 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-100/50 ${className}`}
    >
      <div className="card-body flex flex-col justify-between gap-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="card-title line-clamp-1 text-lg font-semibold text-white">
            {name}
          </h3>
          {language && (
            <span className="badge badge-outline rounded-full border-green-100/50 px-3 py-1 text-xs text-green-100">
              {language}
            </span>
          )}
        </div>

        {/* Description */}
        {description ? (
          <p className="line-clamp-3 text-sm leading-relaxed text-white/80">
            {description}
          </p>
        ) : (
          <div className="flex-1" />
        )}

        {/* Footer */}
        <div className="card-actions mt-auto flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 text-xs text-green-100/60">
            {typeof stars === "number" && (
              <span className="inline-flex items-center gap-1">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                  className="text-green-100"
                >
                  <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.868 1.401-8.168L.132 9.209l8.2-1.191z" />
                </svg>
                {stars}
              </span>
            )}
          </div>

          <Link
            href={href}
            target="_blank"
            className="btn btn-sm btn-outline border-green-100/50 text-green-100 transition-all hover:bg-green-100/50 hover:text-white"
          >
            View Repo
          </Link>
        </div>
      </div>
    </div>
  );
}

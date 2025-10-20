export type GithubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  html_url: string;
  private: boolean;
  fork: boolean;
  owner?: { login: string };
};

export async function fetchUserRepos(username: string): Promise<GithubRepo[]> {
  // Only repositories the user owns; exclude forks
  const url = `https://api.github.com/users/${username}/repos?per_page=100&type=owner&sort=updated`;
  const res = await fetch(url, {
    next: { revalidate: 3600 },
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    headers: process.env.GITHUB_TOKEN
      ? // eslint-disable-next-line turbo/no-undeclared-env-vars
        { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
      : undefined,
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch repos: ${res.status} ${res.statusText}`);
  }

  const data = (await res.json()) as GithubRepo[];
  return data.filter(
    (r) => !r.private && !r.fork && r.owner?.login === username,
  );
}

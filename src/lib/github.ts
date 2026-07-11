const GITHUB_USERNAME = "AfzalxonKarimov";

export type GithubProfile = {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
};

/**
 * Fetches live GitHub profile + repository data server-side.
 * Falls back to `null` on any failure (rate limit, network, unknown user)
 * so the UI can render a graceful static state instead of crashing the page.
 */
export async function getGithubData(): Promise<{
  profile: GithubProfile | null;
  repos: GithubRepo[];
}> {
  try {
    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github+json" },
      }),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
        { next: { revalidate: 3600 }, headers: { Accept: "application/vnd.github+json" } }
      ),
    ]);

    const profile = profileRes.ok ? ((await profileRes.json()) as GithubProfile) : null;
    const repos = reposRes.ok ? ((await reposRes.json()) as GithubRepo[]) : [];

    return { profile, repos: Array.isArray(repos) ? repos : [] };
  } catch {
    return { profile: null, repos: [] };
  }
}

export { GITHUB_USERNAME };

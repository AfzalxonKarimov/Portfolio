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
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? GITHUB_USERNAME;

    // Single concurrent request - handle responses individually for better error visibility
    const profileRes = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    });

    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      { next: { revalidate: 3600 }, headers: { Accept: "application/vnd.github+json" } }
    );

    // Individual response handling - provide clear error context
    let profile: GithubProfile | null = null;
    let repos: GithubRepo[] = [];

    if (profileRes.ok) {
      profile = (await profileRes.json()) as GithubProfile;
    } else {
      console.error("[GitHub] Profile fetch failed:", {
        status: profileRes.status,
        statusText: profileRes.statusText,
        url: profileRes.url,
      });
    }

    if (reposRes.ok) {
      const reposData = (await reposRes.json()) as GithubRepo[];
      repos = Array.isArray(reposData) ? reposData : [];
    } else {
      console.error("[GitHub] Repos fetch failed:", {
        status: reposRes.status,
        statusText: reposRes.statusText,
        url: reposRes.url,
      });
    }

    return { profile, repos };
  } catch (error) {
    console.error("[GitHub] Request error:", error);
    return { profile: null, repos: [] };
  }
}

export { GITHUB_USERNAME };
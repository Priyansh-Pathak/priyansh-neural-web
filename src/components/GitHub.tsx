import { useEffect, useState } from "react";
import { ExternalLink, Github, GitFork, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Repo { id: number; name: string; description: string | null; html_url: string; stargazers_count: number; forks_count: number; language: string | null; }
interface User { public_repos: number; followers: number; }
const USERNAME = "pripat1008";

const GitHub = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!isVisible) return;
    Promise.all([fetch(`https://api.github.com/users/${USERNAME}`).then((response) => response.json()), fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=4`).then((response) => response.json())])
      .then(([profile, repositories]) => { setUser(profile); setRepos(Array.isArray(repositories) ? repositories : []); })
      .finally(() => setLoading(false));
  }, [isVisible]);

  return (
    <section ref={ref} id="github" className="border-b border-border px-6 py-24 lg:px-8">
       <div className="container mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-label">Open source</p><h2 className="section-title">GitHub activity</h2></div>{user && <p className="text-sm text-muted-foreground">{user.public_repos} public repositories · {user.followers} followers</p>}</div>
        {loading ? <p className="py-10 text-sm text-muted-foreground">Loading repository data…</p> : <div className="grid border border-border md:grid-cols-2">{repos.map((repo, index) => <article key={repo.id} className="group border-b border-border p-6 transition-colors hover:bg-card even:md:border-l md:[&:nth-last-child(-n+2)]:border-b-0"><div className="flex justify-between"><div><p className="technical-label mb-2 text-primary">Repo {String(index + 1).padStart(2, "0")}</p><h3 className="font-semibold transition-colors group-hover:text-primary">{repo.name}</h3></div><Button size="icon" variant="ghost" onClick={() => window.open(repo.html_url, "_blank")} aria-label={`Open ${repo.name}`}><ExternalLink className="h-4 w-4" /></Button></div><p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{repo.description || "Repository on GitHub"}</p><div className="mt-5 flex gap-4 text-xs text-muted-foreground">{repo.language && <span>{repo.language}</span>}<span className="flex items-center gap-1"><Star className="h-3.5 w-3.5" />{repo.stargazers_count}</span><span className="flex items-center gap-1"><GitFork className="h-3.5 w-3.5" />{repo.forks_count}</span></div></article>)}</div>}
        <Button className="mt-8" variant="outline" onClick={() => window.open(`https://github.com/${USERNAME}`, "_blank")}><Github className="mr-2 h-4 w-4" />View GitHub profile</Button>
      </div>
    </section>
  );
};
export default GitHub;
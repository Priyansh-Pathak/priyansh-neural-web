import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Github, Star, GitFork, ExternalLink, Calendar, GitCommit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import GlitchText from "@/components/GlitchText";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

interface GitHubUser {
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
  html_url: string;
}

const GitHub = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);

  const GITHUB_USERNAME = "Priyansh-Pathak";

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        const userData = await userResponse.json();
        setUserData(userData);

        // Fetch repositories (top 6 by stars)
        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        );
        const reposData = await reposResponse.json();
        setRepos(reposData);

        // Fetch recent commits from the most recent repo
        if (reposData.length > 0) {
          const commitsResponse = await fetch(
            `https://api.github.com/repos/${GITHUB_USERNAME}/${reposData[0].name}/commits?per_page=3`
          );
          const commitsData = await commitsResponse.json();
          setCommits(commitsData);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        toast({
          title: "Error loading GitHub data",
          description: "Unable to fetch GitHub information. Please try again later.",
          variant: "destructive",
        });
        setLoading(false);
      }
    };

    if (isVisible) {
      fetchGitHubData();
    }
  }, [isVisible, toast]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <section
      ref={ref}
      id="github"
      className={`py-24 px-6 lg:px-8 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            GitHub <GlitchText text="Activity" className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent" />
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mx-auto shadow-[0_0_20px_rgba(0,255,255,0.5)]" />
          <p className="text-muted-foreground mt-4">Real-time data from my GitHub profile</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Stats Overview */}
            {userData && (
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{userData.public_repos}</div>
                  <div className="text-sm text-muted-foreground">Public Repositories</div>
                </Card>
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{userData.followers}</div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </Card>
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{userData.following}</div>
                  <div className="text-sm text-muted-foreground">Following</div>
                </Card>
              </div>
            )}

            {/* Pinned/Top Repositories */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Github className="w-6 h-6 text-primary" />
                Top Repositories
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {repos.map((repo, index) => (
                  <Card
                    key={repo.id}
                    className={`p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group duration-500 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold group-hover:text-primary transition-colors mb-2">
                            {repo.name}
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {repo.description || "No description available"}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        {repo.language && (
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-primary" />
                            <span>{repo.language}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-border/50">
                        <span className="text-xs text-muted-foreground">
                          Updated {formatDate(repo.updated_at)}
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-primary hover:text-primary/80"
                          onClick={() => window.open(repo.html_url, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Commits */}
            {commits.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <GitCommit className="w-6 h-6 text-primary" />
                  Recent Commits
                </h3>
                <div className="space-y-4">
                  {commits.map((commit, index) => (
                    <Card
                      key={commit.sha}
                      className={`p-4 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all group duration-500 ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                      }`}
                      style={{ transitionDelay: `${(index * 0.1) + 0.6}s` }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="text-sm font-medium mb-1 group-hover:text-primary transition-colors">
                            {commit.commit.message.split("\n")[0]}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {formatDate(commit.commit.author.date)}
                            </div>
                            <code className="px-2 py-0.5 rounded bg-muted">
                              {commit.sha.substring(0, 7)}
                            </code>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-primary hover:text-primary/80"
                          onClick={() => window.open(commit.html_url, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* View GitHub Profile */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open(`https://github.com/${GITHUB_USERNAME}`, "_blank")}
              >
                <Github className="mr-2 w-5 h-5" />
                View Full GitHub Profile
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-neural-blue/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default GitHub;

import axios from "axios";

export interface GithubRepo {
  name: string;
  description: string;
  language: string;
  url: string;
  stargazers_count: number;
  forks_count: string;
  updated_at: string;
}

const getGithubRepos = async ({ username }: { username: string }) => {
  try {
    const DESIRED_REPOS_NUMBER = 10;
    const res = await axios.get(`https://api.github.com/users/${username}/repos`);

    const repos = res.data;
    const reposWithStars = repos.filter((r: GithubRepo) => r.stargazers_count > 0);

    if (reposWithStars.length < DESIRED_REPOS_NUMBER) {
      const latestReposNoStars = repos
        .filter((r: GithubRepo) => r.stargazers_count <= 0)
        .sort(
          (a: GithubRepo, b: GithubRepo) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        )
        .slice(0, DESIRED_REPOS_NUMBER - reposWithStars.length);

      return [...reposWithStars, ...latestReposNoStars];
    }

    return [...reposWithStars];
  } catch (err) {
    console.log(err);
  }
};

export default getGithubRepos;

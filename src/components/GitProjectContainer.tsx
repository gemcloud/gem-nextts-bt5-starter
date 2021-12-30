import React from "react";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import Repository from "@/types/Repository";
import Project from "@/components/GitProject";

export default function ProjectContainer(): JSX.Element {
  const { data, error } = useSWR<Repository[], any>("/api/github", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const gatherRepos = (initialRepos: Repository[]): Repository[] => {
    if (initialRepos.length > 0) {
      //   const displayRepoNames = [
      //     "aybow-fitness",
      //     "trello-clone",
      //     "code-like-google",
      //     "pineapple",
      //     "portfolio",
      //     "spotify",
      //     "lolProject",
      //     "donaldgenerated",
      //     "gaminginfluencersite",
      //     "squidgame"
      //   ];
      try {
        return (
          initialRepos
            //   .filter(repo => displayRepoNames.includes(repo.name))
            .sort((a, b) => b.created_at.localeCompare(a.created_at))
        );
      } catch (error) {
        console.error(error);
        return [];
      }
    }
    return [];
  };

  return (
    <div className="row g-4">
      {gatherRepos(data)?.map(repo => (
        <div className="col-sm-6" key={repo.id}>
          <Project repo={repo} />
        </div>
      ))}
    </div>
  );

  //   return (
  //     <Grid container direction="row" spacing={2}>
  //       {gatherRepos(data)?.map(repo => (
  //         <Grid item xs={12} sm={6} key={repo.id}>
  //           <Project repo={repo} />
  //         </Grid>
  //       ))}
  //     </Grid>
  //   );
}

import React from "react";
import Link from "next/link";
import Repository from "@/types/Repository";
import { toDate, upperFirst } from "@/utils/formatters";

export default function GitProject({ repo }: { repo: Repository }) {
  return (
    <Link href={repo.html_url}>
      <a
        target="_blank"
        className=""
        style={{ textDecoration: `none`, color: `#212529` }}
      >
        <div className="card p-5 border bg-light shadow p-3 mb-5 bg-body rounded">
          <div className="card-body">
            <p className="card-text">{toDate(repo.created_at)}</p>
            <h2 className="card-title">
              <b>{upperFirst(repo.name)}</b> <i className="fas fa-rocket" />
            </h2>
            <p className="card-text">{repo.language ? repo.language : "\u00A0"}</p>
            <p className="card-text">{upperFirst(repo.description)}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

// const useStyles = makeStyles({
//   root: {
//     minWidth: 204
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)"
//   },
//   title: {
//     fontSize: 14
//   },
//   pos: {
//     marginBottom: 12
//   },
//   desc: {
//     height: 80,
//     overflowY: "hidden"
//   }
// });

// export default function Project({ repo }: { repo: Repository }) {
//   const classes = useStyles();

//   return (
//     <ButtonBase target="_blank" href={repo.html_url} className={classes.root}>
//       <Card>
//         <CardContent>
//           <Typography className={classes.title} color="textSecondary" gutterBottom>
//             {toDate(repo.created_at)}
//           </Typography>
//           <Typography variant="h5" component="h2">
//             <b>{upperFirst(repo.name)}</b> <LaunchIcon />
//           </Typography>
//           <Typography className={classes.pos} color="textSecondary">
//             {repo.language}
//           </Typography>
//           <Typography variant="body2" component="p" className={classes.desc}>
//             {upperFirst(repo.description)}
//           </Typography>
//         </CardContent>
//       </Card>
//     </ButtonBase>
//   );
// }

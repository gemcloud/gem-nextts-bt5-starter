import React from "react";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import Repository from "@/types/Repository";
import { showcaseItems } from "../../gemDemoData/gemShowcases";

export default function GemShowCaseContainer(): JSX.Element {
  const { data, error } = useSWR<Repository[], any>("/api/github", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      {showcaseItems?.map(({ id, hrefUrl, name, imagePath, description }) => (
        <Link key={id} href={hrefUrl} passHref>
          <div className="col-lg-2 col-md-2 col-4 item">
            <a className="nav-link" aria-label={name}>
              <Image src={imagePath} alt={name} width={136} height={126}></Image>
            </a>
          </div>
        </Link>
      ))}
    </>
  );
}

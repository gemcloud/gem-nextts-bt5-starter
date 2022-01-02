import Link from "./NoScrollLink";

interface IProps {
  slug: string;
  propClasses?: string;
}

// export default function ReadMore({ string: slug, string: propClasses }) {
export default function ReadMore({ slug, propClasses }: IProps) {
  return (
    <Link
      as={`/portfolio/${slug}`}
      href={{ pathname: "/portfolio/[slug]", query: { internalLink: true } }}
    >
      <a className={`css code here ${propClasses}`}>Read more</a>
    </Link>
  );
}

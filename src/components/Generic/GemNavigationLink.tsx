import * as Scroll from "react-scroll";
import { useRouter } from "next/router";
import ExternalLink from "./ExternalLink";
import Link from "./NoScrollLink";

const getLink = ({
  url,
  external,
  text,
  ariaLabel,
  scrollTo
}: {
  url: string;
  external: string;
  text: string;
  ariaLabel: string;
  scrollTo: string;
}) => {
  if (external) {
    return (
      <ExternalLink aria-label={ariaLabel || text} href={url}>
        {text}
      </ExternalLink>
    );
  }
  return (
    <Link href={{ pathname: url, query: { scrollTo, internalLink: true } }} as={url}>
      <a aria-label={ariaLabel || text}>{text}</a>
    </Link>
  );
};

const getScrollLink = ({
  text,
  scrollTo,
  closeMenu
}: {
  text: string;
  scrollTo: string;
  closeMenu: any;
}) => (
  <Scroll.Link to={scrollTo} spy smooth duration={500} onClick={closeMenu}>
    {text}
  </Scroll.Link>
);

export default function GemNavigationLink({
  closeMenu,
  text,
  scrollTo,
  href,
  external,
  ariaLabel
}: {
  closeMenu: any;
  text: string;
  scrollTo: string;
  href: string;
  external: string;
  ariaLabel: string;
}) {
  const url = href;
  const { pathname } = useRouter();
  const children =
    scrollTo && href === pathname
      ? getScrollLink({ text, scrollTo, closeMenu })
      : getLink({
          text,
          url,
          external,
          ariaLabel,
          scrollTo
        });
  return (
    <li onClick={closeMenu} role="menuitem" className="">
      {children}
    </li>
  );
}

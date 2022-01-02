// inline styles:
//  https://fettblog.eu/typescript-react/styles/
import CSS from "csstype";

interface IProps {
  href: string;
  className?: string;
  style?: CSS.Properties;
  children?: any; //IconType
}

// export default function ExternalLink({ href, className, style, children }: IProps): JSX.Element => {
const ExternalLink = ({ href, className, style, children }: IProps): JSX.Element => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
};

export default ExternalLink;

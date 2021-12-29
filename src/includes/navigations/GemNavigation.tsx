import { useEffect, useState } from "react";
import Link from "next/link";
import { InferGetStaticPropsType } from "next";
import { menuItems } from "../../../gemDemoData/gemMenuItems";

// export default function ProjectsPage({
//   projects,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
// export default function Header({ large = false }: HeaderProps);
//export function PreloadProvider({ children }: { children: React.ReactNode }) {
// function GemNavigation(menuItemLists: IMenuItem[]) {
// function GemNavigation({ menuItemLists }: { menuItemLists: IMenuItem[] }) {

// function GemNavigation({
//   menuItemLists
// }: InferGetStaticPropsType<typeof getStaticProps>) {
function GemNavigation() {
  // decalre variable
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  const [showNavigationMobile, setNavigationMobile] = useState<boolean>(false);
  const [offset, setOffset] = useState(0);

  // functions
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function getYPosition() {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    return top;
  }

  const handleScroll = () => {
    setClientWindowHeight(getYPosition());
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  type MyProps = {
    name: string;
  };

  // const MyButton = React.forwardRef(({ href, onClick }, ref) => (
  //   <a href={href} ref={ref} onClick={onClick}>
  //     Click Me
  //   </a>
  // ));
  //   const Input = React.forwardRef((props, ref) => <input {...props} />);
  //   const CustomInput = React.forwardRef<HTMLInputElement, MyProps>(props) => {
  //   // access your props and ref here
  // };

  // return HTML
  return (
    <div
      className="navbar-component"
      style={{ marginBottom: offset >= 50 ? "5.5rem" : "0.0rem" }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{
          background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
          padding: `${padding}px 0px`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
          backdropFilter: `saturate(180%) blur(20px)`
        }}
      >
        <div className="container">
          <a className="navbar-brand" href="#landing">
            <h5>
              <span className="waving-hand">👋</span> Logo Name
            </h5>
          </a>

          <button
            className="navbar-toggler navbar-toggler-right collapsed"
            type="button"
            aria-label="navbar_toggle"
            onClick={() => setNavigationMobile(!showNavigationMobile)}
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarResponsive"
            // style={{ display: "block" }}
            style={{ display: showNavigationMobile ? "block" : "none" }}
          >
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              {/* loop item */}
              {menuItems.map(menuItem => (
                <li key={menuItem.id} className="nav-item">
                  <Link href={menuItem.hrefurl}>
                    <a
                      className="nav-link"
                      onClick={() =>
                        setNavigationMobile(
                          showNavigationMobile ? !showNavigationMobile : false
                        )
                      }
                    >
                      {menuItem.name}
                    </a>
                  </Link>
                  {/* <a
                    className="nav-link"
                    href={menuItem.hrefurl}
                    onClick={() =>
                      setNavigationMobile(
                        showNavigationMobile ? !showNavigationMobile : false
                      )
                    }
                  >
                    {menuItem.name}
                  </a> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default GemNavigation;

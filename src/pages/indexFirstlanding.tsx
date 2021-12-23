import Head from "next/head";

import Layout from "../layouts/firstlandingLayout";
import HomeSection from "../components/firstlanding/HomeSection";
import ProjectSection from "../components/firstlanding/ProjectSection";
import AboutSection from "../components/firstlanding/AboutSection";
import ContactSection from "../components/firstlanding/ContactSection";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>🎯 First Landing Portfolio Gem Cloud, Next.js, TypeScript, </title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <div style={{ marginTop: "7rem" }}>
          <HomeSection parameter="" />
          <ProjectSection parameter="" />
          <AboutSection parameter="active" />
          <ContactSection parameter="active" />
        </div>
      </Layout>
    </>
  );
}

/* Dummy data */

// <div style={{ marginTop: "7rem" }}>
//   <div>
//     <p>
//       <a
//         className="btn btn-primary"
//         data-bs-toggle="collapse"
//         href="#collapseExample"
//         role="button"
//         aria-expanded="false"
//         aria-controls="collapseExample"
//       >
//         Link with href
//       </a>
//       <button
//         className="btn btn-primary"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#collapseExample"
//         aria-expanded="false"
//         aria-controls="collapseExample"
//       >
//         Button with data-bs-target
//       </button>
//     </p>
//     <div className="collapse" id="collapseExample">
//       <div className="card card-body">
//         Some placeholder content for the collapse component. This panel is hidden
//         by default but revealed when the user activates the relevant trigger.
//       </div>
//     </div>
//   </div>
//   <section id="home">
//     <div className="container px-4">
//       <div className="row gx-4 justify-content-center">
//         <div className="col-lg-8">
//           <h2>Home</h2>
//           <p className="lead">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text ever
//             since the 1500s, when an unknown printer took a galley of type and
//             scrambled it to make a type specimen book. It has survived not only
//             five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged. It was popularised in the 1960s with
//             the release of Letraset sheets containing Lorem Ipsum passages, and
//             more recently with desktop publishing software like Aldus PageMaker
//             including versions of Lorem Ipsum.
//           </p>
//           <p className="lead">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text ever
//             since the 1500s, when an unknown printer took a galley of type and
//             scrambled it to make a type specimen book. It has survived not only
//             five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged. It was popularised in the 1960s with
//             the release of Letraset sheets containing Lorem Ipsum passages, and
//             more recently with desktop publishing software like Aldus PageMaker
//             including versions of Lorem Ipsum.
//           </p>
//           <p className="lead">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text ever
//             since the 1500s, when an unknown printer took a galley of type and
//             scrambled it to make a type specimen book. It has survived not only
//             five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged. It was popularised in the 1960s with
//             the release of Letraset sheets containing Lorem Ipsum passages, and
//             more recently with desktop publishing software like Aldus PageMaker
//             including versions of Lorem Ipsum.
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>

//   <section id="about">
//     <div className="container px-4">
//       <div className="row gx-4 justify-content-center">
//         <div className="col-lg-8">
//           <h2>About</h2>
//           <p className="lead">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text ever
//             since the 1500s, when an unknown printer took a galley of type and
//             scrambled it to make a type specimen book. It has survived not only
//             five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged. It was popularised in the 1960s with
//             the release of Letraset sheets containing Lorem Ipsum passages, and
//             more recently with desktop publishing software like Aldus PageMaker
//             including versions of Lorem Ipsum.
//           </p>
//           <p className="lead">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text ever
//             since the 1500s, when an unknown printer took a galley of type and
//             scrambled it to make a type specimen book. It has survived not only
//             five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged. It was popularised in the 1960s with
//             the release of Letraset sheets containing Lorem Ipsum passages, and
//             more recently with desktop publishing software like Aldus PageMaker
//             including versions of Lorem Ipsum.
//           </p>
//           <p className="lead">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text ever
//             since the 1500s, when an unknown printer took a galley of type and
//             scrambled it to make a type specimen book. It has survived not only
//             five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged. It was popularised in the 1960s with
//             the release of Letraset sheets containing Lorem Ipsum passages, and
//             more recently with desktop publishing software like Aldus PageMaker
//             including versions of Lorem Ipsum.
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>

//   <section id="contact">
//     <div className="container px-4">
//       <div className="row gx-4 justify-content-center">
//         <div className="col-lg-8">
//           <h2>Contact</h2>
//           <p className="lead">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text ever
//             since the 1500s, when an unknown printer took a galley of type and
//             scrambled it to make a type specimen book. It has survived not only
//             five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged. It was popularised in the 1960s with
//             the release of Letraset sheets containing Lorem Ipsum passages, and
//             more recently with desktop publishing software like Aldus PageMaker
//             including versions of Lorem Ipsum.
//           </p>
//           <p className="lead">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text ever
//             since the 1500s, when an unknown printer took a galley of type and
//             scrambled it to make a type specimen book. It has survived not only
//             five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged. It was popularised in the 1960s with
//             the release of Letraset sheets containing Lorem Ipsum passages, and
//             more recently with desktop publishing software like Aldus PageMaker
//             including versions of Lorem Ipsum.
//           </p>
//           <p className="lead">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text ever
//             since the 1500s, when an unknown printer took a galley of type and
//             scrambled it to make a type specimen book. It has survived not only
//             five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged. It was popularised in the 1960s with
//             the release of Letraset sheets containing Lorem Ipsum passages, and
//             more recently with desktop publishing software like Aldus PageMaker
//             including versions of Lorem Ipsum.
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>
// </div>;

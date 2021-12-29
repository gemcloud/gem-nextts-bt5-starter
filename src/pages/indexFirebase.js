import Head from "next/head";
import Layout from "../layouts/BaseLayout";
import styles from "@/styles/index.module.scss";
import { getPosts } from "@/libs/firebase"; // #firebase

//### Start of helper function
// const getFormattedDate = (milliseconds: string | number | Date) => {
const getFormattedDate = milliseconds => {
  //   const formatOptions = {
  //     weekday: "long",
  //     month: "long",
  //     day: "numeric",
  //     year: "numeric",
  //     timeZone: "UTC"
  //   };

  const date = new Date(milliseconds);
  //   console.log(date.toLocaleDateString("en-CA", formatOptions));

  return date.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  });
};
//### End of helper function

// export default function IndexFirebase() { { post }: { post: BlogPostType }
const IndexFirebase = ({ posts }) => {
  // const IndexFirebase = ({ posts }: { post: BlogPostType }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>🎯 Gem Cloud, Firebase</title>
        </Head>
        <div style={{ marginTop: "7rem" }}></div>
        <div className={styles.IndexFirebase}>
          <h1>Blog Posts</h1>
          {posts.map(post => (
            <article key={post.slug}>
              <img src={post.coverImage} alt={post.coverImageAlt} />
              <div>
                <h2>{post.title}</h2>
                <span>{getFormattedDate(post.dateCreated)}</span>
                <p
                  dangerouslySetInnerHTML={{
                    __html: `${post.content.substring(0, 200)}...`
                  }}
                ></p>
              </div>
            </article>
          ))}
        </div>
      </Layout>
    </>
  );
};

// This is for fetching data every time the page is visited. We do this
// so that we don't have to redploy the site every time we add a blog post.
// You can read more about this in the Next.js docs at:
// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering

export async function getServerSideProps() {
  const posts = await getPosts();

  return {
    props: {
      posts
    }
  };
}

export default IndexFirebase;

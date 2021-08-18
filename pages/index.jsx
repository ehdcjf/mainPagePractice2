import BlogLayout from "../components/BlogLayout";
import Head from "next/head";
import Link from "next/link";
import Home from "../containers/Home";
const Index = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      {/* <BlogLayout> */}
      {/* <Link href="/haejwo"> */}
      {/* <a>해줘</a> */}
      {/* </Link> */}
      <Home />
      {/* </BlogLayout> */}
    </>
  );
};

export default Index;

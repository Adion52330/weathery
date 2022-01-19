import Head from "next/head";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Weathery - Adion - DevChallenges Solution</title>
        <link rel="icon" href="/devchallenges.png" />
      </Head>

      <div>
        <Main />
      </div>
    </div>
  );
}

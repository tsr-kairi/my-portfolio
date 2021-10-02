import Head from "next/head";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <div className="bg-[#153956] h-auto">
      <Head>
        <title>TsrDesign</title>
      </Head>

      {/* Hero */}
      <Hero />
    </div>
  );
}
